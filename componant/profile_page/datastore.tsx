import create from "zustand";

export type FormState = {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
  level: string;
  setLevel: (value: string) => void;
};

export const useFormDataStore = create<FormState>((set) => ({
  firstName: "",
  setFirstName: (firstName) => set({ firstName }),
  lastName: "",
  setLastName: (lastName) => set({ lastName }),
  bio: "",
  setBio: (bio) => set({ bio }),
  level: "",
  setLevel: (level) => set({ level }),
}));
