export const priceFormat = (valor) => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(valor);
};
