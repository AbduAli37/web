import { Stock } from "@/types/product";

export const findLowestPriceInStocks = (stocks: Stock[]) => {
  let minPrice = Infinity;
  stocks.forEach((stock) => {
    if (stock.price <= minPrice) {
      minPrice = stock.price;
    }
  });
  return minPrice;
};
