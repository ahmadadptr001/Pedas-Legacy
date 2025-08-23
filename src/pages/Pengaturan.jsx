import { useEffect, useState } from "react";
import { auth } from "../services/db";
import { useNavigate } from "react-router-dom";

export default function Pengaturan() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/masuk");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div className="p-4">Memuat pengaturan...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Pengaturan Akun</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="text"
          value={user.email}
          disabled
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Nama</label>
        <input
          type="text"
          value={user.displayName || ""}
          disabled
          className="input input-bordered w-full"
        />
      </div>
      <div className="text-gray-500 text-sm">
        Untuk perubahan data akun, silakan hubungi admin.
      </div>
    </div>
  );
}
