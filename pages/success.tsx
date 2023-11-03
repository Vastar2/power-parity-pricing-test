import Image from "next/image";
import Link from "next/Link";
import shirt from "../public/shirt.png";
import map from "../public/map.svg";
import { useState, useEffect } from "react";

const SuccessPage = () => {
  const [randomNumber, setRandomNumber] = useState(undefined);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * (999999 - 900000) + 900000));
  }, []);

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
        <h1 className="text-3xl sm:text-5xl font-bold">Success!</h1>
        <p className="mt-4 sm:text-xl text-lg text-gray-700">
          Be patient and your order will arrive soon
        </p>
        <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full max-w-[480px] hover:shadow-2xl transition pt-4">
          <div className="p-4 flex flex-col justify-center items-center border-b">
            <div className="flex justify-between w-full items-baseline">
              <div className="ml-4 mr-auto text-left flex flex-col">
                <h4 className="font-semibold text-xl mb-4">
                  Order No. {randomNumber}
                </h4>
                <div className="flex gap-4 items-center">
                  <div className="w-20 border border-gray-300 rounded-md">
                    <Image
                      alt="Black shirt with white logo"
                      src={shirt}
                      placeholder="blur"
                      layout="responsive"
                    />
                  </div>
                  <h5 className="text-gray-700 font-bold">Alpha Black shirt</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
            <div className="bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm flex flex-col gap-4">
              <p className="inline-block">
                <span>
                  A tracking number for your item will be sent to your email
                  example@gmail.com
                </span>
              </p>
            </div>
            <Link
              href="/"
              className="py-4 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900"
            >
              Back to main page
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessPage;
