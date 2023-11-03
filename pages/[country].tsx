import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import type { ParsedUrlQuery } from "querystring";
import { Layout } from "@vercel/examples-ui";
import type { Country } from "../types";
import shirt from "../public/shirt.png";
import map from "../public/map.svg";
import { api } from "../utils";
import PurchaseContainer from "../components/PurchaseContainer";

interface Params extends ParsedUrlQuery {
  country: Country;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await api.parity.list();

  return {
    paths: countries.map((country) => ({
      params: {
        country,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params,
}) => {
  const parity = await api.parity.fetch(params.country);

  return {
    props: {
      country: params.country,
      parity,
    },
  };
};

const CountryPage = ({ country, parity }) => {
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
        <h1 className="text-3xl sm:text-5xl font-bold">Power parity pricing</h1>
        <p className="mt-4 sm:text-xl text-lg text-gray-700">
          Show localized pricing based on location headers
        </p>
        <a
          className="flex items-center mt-4 text-md sm:text-lg text-blue-500 hover:underline"
          href="https://vercel.com/docs/edge-network/headers#request-headers?utm_source=geo-ip-demo&utm_campaign=geo-ip-demo"
          target="_blank"
          rel="noreferrer"
        >
          View headers documentation
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            className="ml-1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
        <div className="lg:h-[512px] lg:w-[512px] h-[320px] w-[320px] -mb-40 lg:-mb-56">
          <Image
            alt="Black shirt with white logo"
            src={shirt}
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <PurchaseContainer country={country} parity={parity} />
      </main>
    </div>
  );
};

export default CountryPage;

CountryPage.Layout = Layout;
