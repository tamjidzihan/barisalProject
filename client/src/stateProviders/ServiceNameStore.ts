import { create } from 'zustand';

interface ServiceNameStore {
    serviceName: string | null;
    setServiceName: (name: string | null) => void;
}

export const useServiceNameStore = create<ServiceNameStore>((set) => ({
    serviceName: null,
    setServiceName: (name) => set({ serviceName: name }),
}));