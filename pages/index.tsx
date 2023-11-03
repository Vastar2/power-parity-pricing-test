import { useRouter } from "next/router";
import { useEffect } from "react";

const DefaultPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/ua");
  }, [router]);

  return null;
};

export default DefaultPage;
