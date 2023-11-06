export default function handler(req, res) {
  const result = Number(
    Math.round(req.query.price - (req.query.parity * req.query.price) / 100)
  ).toLocaleString("en-US", { currency: "USD" });

  res.status(200).json(result);
}
