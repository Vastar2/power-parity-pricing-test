import toast from "react-hot-toast";
import { FormData } from "../types";

export const onChange = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  errorData: FormData,
  setErrorData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  const resultData = { ...errorData, [e.target.id]: e.target.value };
  setErrorData(resultData);
};

export const onSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  errorData: {
    firstName: string;
    secondName: string;
    moneyAmount: string;
    message: string;
  }
) => {
  e.preventDefault();
  if (
    errorData.firstName === "" ||
    errorData.secondName === "" ||
    errorData.moneyAmount === "" ||
    errorData.message === ""
  ) {
    toast.error(`Fill in all fields!`);
    return;
  } else if (errorData.firstName.length < 3 || errorData.firstName.length < 3) {
    toast.error(`The length of your name must be at least 2 characters!`);
    return;
  }
  toast.success(
    `Hello, ${errorData.firstName} ${errorData.secondName}. Thank you for your report!`
  );
};
