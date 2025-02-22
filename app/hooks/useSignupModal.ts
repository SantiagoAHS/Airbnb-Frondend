import { create } from "zustand";

interface SignModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSignupModal = create<SignModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close:() => set({ isOpen: false})
}))

export default useSignupModal;