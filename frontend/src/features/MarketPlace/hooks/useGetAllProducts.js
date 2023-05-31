import { useQuery } from "react-query";
import { getAllProducts } from "../services/Product";

//  return [isLoading, error, data];
export const useGetAllProducts = (username) => {
  const isLoading = true;
  const error = true;
  //return useQuery(["product", "detail", username], getAllProducts(username));
  const data = getAllProducts("");
  console.log(data);
  return [isLoading, error, data];
};
