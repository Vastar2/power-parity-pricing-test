export const getResultPrice = (isParityEnabled, country) => {
  const resultPrice = {
    full: "price_1O8Q0ZKPwxHqQ37rsTlCQtVM",
    default: "price_1O8TW9KPwxHqQ37rEgu4fQzg",
    us: "price_1O8TW9KPwxHqQ37rEgu4fQzg",
    uk: "price_1O8TWRKPwxHqQ37rP3Vj0DNP",
    jp: "price_1O8TWRKPwxHqQ37rP3Vj0DNP",
    au: "price_1O8TWeKPwxHqQ37ryLkVEENL",
    de: "price_1O8TXBKPwxHqQ37rrcpqIDjN",
    cn: "price_1O8TXYKPwxHqQ37rKMZQJy6o",
    ar: "price_1O8TXmKPwxHqQ37ru48xXSi1",
  };

  if (isParityEnabled && resultPrice[country]) {
    return resultPrice[country];
  } else if (isParityEnabled && !resultPrice[country]) {
    return resultPrice.default;
  } else if (!isParityEnabled) {
    return resultPrice.full;
  }
};
