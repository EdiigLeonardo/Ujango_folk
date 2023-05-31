import { useQuery } from "react-query";
import { getUsernameDetail } from "../services/Profile";

export const useGetUserInfo = (username) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => getUsernameDetail(username),
  });

  return {
    isLoading,
    error,
    data,
  };
};
