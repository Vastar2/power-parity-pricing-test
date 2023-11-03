import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  console.log(1);
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, stripePromise);
  return stripePromise;
};
