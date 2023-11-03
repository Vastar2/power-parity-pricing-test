import type { AppProps } from "next/app";
import type { LayoutProps } from "@vercel/examples-ui/layout";
import { getLayout } from "@vercel/examples-ui";
import "@vercel/examples-ui/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <>
      <Layout
        title="Power parity pricing"
        path="edge-middleware/power-parity-pricing"
      >
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </>
  );
};

export default MyApp;
