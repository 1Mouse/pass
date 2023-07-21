import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import axios, { AxiosError } from "axios";

interface ITrackState{
    visitedHomeAfterLogin: boolean
    setVisitedHomeAfterLogin: (visitedHomeAfterLogin: boolean) => void
}

const useTrackStore = create<ITrackState>()(
    devtools(
        persist(
            (set, get) => ({
                visitedHomeAfterLogin: false,
                setVisitedHomeAfterLogin: (visitedHomeAfterLogin: boolean) => set({ visitedHomeAfterLogin }),
                
            }),
            {
                name: "track-store",
            }
        )
    )
);

export default useTrackStore;
