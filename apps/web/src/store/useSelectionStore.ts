import { TBAToken } from 'shared-config';
import { create } from 'zustand';

type Store = {
  selectedToken?: TBAToken;
  setToken: (token: TBAToken) => void;
};

export const useSelectionStore = create<Store>((set) => ({
  setToken: (selectedToken: TBAToken) => set((state) => ({ selectedToken })),
}));
