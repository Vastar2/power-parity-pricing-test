import { api } from "./api";
import { checkout } from "./checkout";
import { PRODUCT_PRICE, PARITIES } from "./constants";
import { getParityPrice } from "./getParityPrice";
import { getResultPrice } from "./getResultPrice";
import { onChange, onSubmit } from "./handleForm";
import { middleware } from "./middleware";

export {
  api,
  checkout,
  PRODUCT_PRICE,
  PARITIES,
  getParityPrice,
  getResultPrice,
  onChange,
  onSubmit,
  middleware,
};
