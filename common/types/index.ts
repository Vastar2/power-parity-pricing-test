import { PARITIES } from "../utils/constants";

export type Country = keyof typeof PARITIES;

export type FormData = {
  firstName: string;
  secondName: string;
  moneyAmount: string;
  message: string;
};
