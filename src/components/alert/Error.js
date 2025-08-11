import Swal from "sweetalert2";

export function Error(mess) {
    Swal.fire({
        icon: "error",
        title: mess,
    });
}
