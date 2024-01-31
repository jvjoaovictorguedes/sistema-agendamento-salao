import axios from "axios";
import { create } from "zustand";

type Item = {
  title: string;
  start: Date;
  end: Date;
  dat_hours_init: Date;
  dat_hours_final: Date;
};

export const ApiCall = async () => {
  try {
    const requestScheduling = await axios.get(
      "http://localhost:8000/scheduling"
    );
    const response = requestScheduling.data;
    const responseArray: Item[] = response.scheduling;
    const title = requestScheduling.data.service[0].name_service;
    const newArray = responseArray.map((item: Item) => ({
      start: new Date(item.dat_hours_init),
      end: new Date(item.dat_hours_final),
      title: title,
    }));
    return newArray;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};

type SchedulingStore = {
  scheduling: Item[];
  addScheduling: (schedule: Item) => void;
  removeScheduling: (id: number) => void;
};

export const useSchedulingStore = create<SchedulingStore>((set) => ({
  scheduling: [],
  addScheduling: (schedule: Item) =>
    set((state) => ({
      scheduling: [...state.scheduling, schedule],
    })),
  removeScheduling: (id: number) =>
    set((state) => ({
      scheduling: state.scheduling.filter((item) => item.id !== id),
    })),
}));
