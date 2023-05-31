/*export {default as getTrends} from './Posts';
export {default as Profile} from './Profile';
export {default as Trends} from './Trends';
export {default as Promoted} from './Promoted';*/
export {
  getUserFeedPosts,
  getUserTimelinePosts,
  makePost,
  editPost,
  commentPost,
  likePost,
} from "../../features/Post/services/Posts";
export { getTrends } from "../../features/Trendings/services/Trends";
export { getSuggestedPeopleToFollow } from "../../features/Users/services/Follower";
