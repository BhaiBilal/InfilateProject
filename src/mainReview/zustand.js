
import create from 'zustand'


export const useStore = create(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    bears2: 0,
    removeAllBears2: () => set({ bears2: 0 }),
  }))