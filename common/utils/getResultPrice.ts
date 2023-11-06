export const getResultPrice = (isParityEnabled, country) => {
  if (!isParityEnabled) {
    return "price_1O8Q0ZKPwxHqQ37rsTlCQtVM";
  } else if (country === "us") {
    return "price_1O8TW9KPwxHqQ37rEgu4fQzg";
  } else if (country === "uk" || country === "jp") {
    return "price_1O8TWRKPwxHqQ37rP3Vj0DNP";
  } else if (country === "au") {
    return "price_1O8TWeKPwxHqQ37ryLkVEENL";
  } else if (country === "de") {
    return "price_1O8TXBKPwxHqQ37rrcpqIDjN";
  } else if (country === "cn") {
    return "price_1O8TXYKPwxHqQ37rKMZQJy6o";
  } else if (country === "ar") {
    return "price_1O8TXmKPwxHqQ37ru48xXSi1";
  } else {
    return "price_1O8TW9KPwxHqQ37rEgu4fQzg";
  }
};
