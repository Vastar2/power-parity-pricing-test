import Image from "next/image";
import map from "../public/map.svg";
import { useState } from "react";
import Form from "../components/ErrorForm";

const ErrorPage = () => {
  const [errorData, setErrorData] = useState({
    firstName: "",
    secondName: "",
    moneyAmount: "",
    message: "",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image
          alt="World Map"
          src={map}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 sm:pt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">Payment failed</h1>
        <p className="mt-4 sm:text-xl text-lg text-gray-700">
          Oops...Something happened during your payment
        </p>
        <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-6 w-full max-w-[480px] hover:shadow-2xl transition pt-2">
          <Form errorData={errorData} setErrorData={setErrorData} />
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
