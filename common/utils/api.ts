import { PARITIES } from "./";
import { Country } from "../types";

export const api = {
  parity: {
    list: async (): Promise<Country[]> => Object.keys(PARITIES) as Country[],
    fetch: async (country: Country): Promise<number> => {
      return PARITIES[country] || 10;
    },
  },
};
