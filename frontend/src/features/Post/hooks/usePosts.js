import { useQuery } from "react-query";
import { getUserFeedPosts, getUserTimelinePosts } from "../services/Posts";

export const useGetPosts = (username) => {
  return useQuery(["profile", "feed", username], (username) =>
    getUserFeedPosts(username)
  );
};

export const useGetTimeline = (username) => {
  return useQuery(["profile", "timeline", username], (username) =>
    getUserTimelinePosts(username)
  );
};
