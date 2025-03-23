import { toast } from 'react-toastify';

export const getToast = (text, position = "bottom-right") => {
    return toast.success(text, {
        position: position,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
}