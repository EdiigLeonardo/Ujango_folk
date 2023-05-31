import { useQuery } from "react-query";
import { getUsernameDetail, getUsernameTimeline } from "../services/Profile";

export const useGetAllProfileInfo = (username) => {
  const detail = useQuery(["profile", "detail", username], (username) =>
    getUsernameDetail(username)
  );

  const timeline = useQuery(
    ["timeline", username],
    getUsernameTimeline(username)
  );

  const isLoading = detail.isLoading || timeline.isLoading;
  const error = detail.error || timeline.error;

  return {
    isLoading,
    error,
    detail_data: detail.data,
    timeline_data: timeline.data,
  };
};
