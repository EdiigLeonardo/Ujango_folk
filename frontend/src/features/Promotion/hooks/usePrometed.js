import { useQuery } from "react-query";
import { getPromotedPost } from "../services/Promoted";

export const usePromoted = (username) => {
  return useQuery(["promoted", username], (username) =>
    getPromotedPost(username)
  );
};
