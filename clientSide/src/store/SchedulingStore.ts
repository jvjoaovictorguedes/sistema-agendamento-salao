import axios from "axios";
import { create } from "zustand";

const ApiCall = async () => {
  try {
    const requestScheduling = await axios.get(
      "http://localhost:8000/scheduling"
    );
    const requestService = await axios.get("http://localhost:8000/service");
    return {
      scheduling: requestScheduling.data,
      service: requestService.data,
    };
  } catch (error) {
    return { message: error };
  }
};
export default ApiCall;

const initialState = {
  id_people_client: null,
  id_people_professional: null,
  date: null,
  time: null,
};

type Item = {
  id_people_client: number | null;
  id_people_professional: number | null;
  date: string | null;
  time: string | null;
  schedule: string;
  id: number;
};

type Scheduling = {
  scheduling: [];
  addScheduling: (item: Item) => void;
  removeScheduling: (id: number) => void;
};

export const schedulingStore = create<Scheduling>((set) => {
  return {
    scheduling: [],
    addScheduling: (schedule: Item) =>
      set((state) => {
        scheduling: [...state.scheduling, schedule];
      }),
    removeScheduling: (id: Item) =>
      set((state) => {
        scheduling: [...state.scheduling.filter((item) => item.id != id)];
      }),
  };
});
