import Swal from "sweetalert2";

export function Success(mess) {
    Swal.fire({
        icon: "success",
        title: mess,
    });
}
