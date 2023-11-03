import { getResultPrice } from "../utils";
import { checkout } from "../utils";
import Image from "next/image";
import { PRODUCT_PRICE } from "../utils";
import { getParityPrice } from "../utils";
import { useMemo, useState } from "react";

const PurchaseContainer = ({ country, parity }) => {
  const [isParityEnabled, setIsParityEnabled] = useState<boolean>(false);
  const parityPrice = useMemo(
    () => getParityPrice(PRODUCT_PRICE, parity),
    [parity]
  );

  return (
    <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full max-w-[480px] hover:shadow-2xl transition pt-16 lg:pt-24">
      <div className="p-4 flex flex-col justify-center items-center border-b">
        <div className="flex justify-between w-full items-baseline">
          <div className="ml-4 mr-auto text-left flex flex-col">
            <h4 className="font-semibold text-xl">Alpha Black shirt</h4>
            <h5 className="text-gray-700">Limited edition</h5>
          </div>
          {isParityEnabled ? (
            <div className="flex flex-col items-start font-bold text-lg leading-none">
              <span className="text-gray-500 text-sm line-through">
                USD {PRODUCT_PRICE}
              </span>
              <span className="text-green-500">USD {parityPrice}</span>
            </div>
          ) : (
            <h4 className="font-bold text-lg">USD {PRODUCT_PRICE}</h4>
          )}
        </div>
      </div>
      <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
        <div className="bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm flex flex-col gap-4">
          <p className="inline-block">
            <span>We noticed that you&apos;re from </span>
            <Image
              className="bg-gray-200 inline-flex"
              width={16}
              height={12}
              alt={`Country flag for ${country.toUpperCase()}`}
              src={`https://country-flags.vercel.sh/s/${country.toUpperCase()}.svg`}
            />
            <span>
              . We are offering purchasing power parity pricing. If that is
              something that you need:
            </span>
          </p>
          <label className="inline-flex items-center font-semibold">
            <input
              onChange={(event) => setIsParityEnabled(event.target.checked)}
              className="text-black-500 w-4 h-4 mr-2 border border-gray-300 rounded"
              type="checkbox"
            />
            Activate {parity}% off with regional pricing
          </label>
        </div>
        <button
          className="py-4 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: getResultPrice(isParityEnabled, country),
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy now
        </button>
      </div>
    </section>
  );
};

export default PurchaseContainer;