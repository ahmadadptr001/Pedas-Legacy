import { useEffect, useState } from "react";
import { readUsers } from "../services/readUser";
import { deleteUser } from "../services/deleteUser";
import Swal from "sweetalert2";

export default function KelolaPengguna() {
    const [users, setUsers] = useState([]);
    const [queryInput, setQueryInput] = useState("");

    const fetchUsers = async () => {
        try {
            const data = await readUsers();
            if (queryInput) {
                const new_users = data.filter(item => {
                    const nama = item.displayName || item.nama;
                    return nama.toLowerCase().includes(queryInput.toLowerCase());
                });
                console.log(new_users);
                setUsers(new_users)
                return;
            }
            setUsers(data);
        } catch (error) {
            console.error("Gagal memuat data pengguna:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [queryInput]);

    const handleDelete = async id => {
        const result = await Swal.fire({
            title: "Yakin hapus pengguna ini?",
            text: "Tindakan ini tidak bisa dibatalkan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, Hapus",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            try {
                await deleteUser(id);
                Swal.fire({
                    icon: "success",
                    title: "Pengguna berhasil dihapus",
                    timer: 1500,
                    showConfirmButton: false,
                });
                fetchUsers();
            } catch (error) {
                Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus pengguna.", "error");
            }
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Kelola Pengguna</h1>
            <input
                type="search"
                value={queryInput}
                onChange={e => setQueryInput(e.target.value)}
                className="input input-base-200"
                placeholder="Cari pengguna.."
            />
            <div className="overflow-x-auto">
                <table className="table w-full table-sm table-zebra">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{(user.displayName || user.nama || "-").slice(0, 20)}..</td>
                                    <td>{user.email || "-"}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning mr-2">
                                            <i className="fa fa-edit"></i> Edit
                                        </button>
                                        <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-error">
                                            <i className="fa fa-trash"></i> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    Tidak ada pengguna
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
