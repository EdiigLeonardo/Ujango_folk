import axios from "axios";
import data from "./data.json";
export const getUsernameDetail = async (username) => {
  //const data = await axios.get(`/profile/${username}`);
  //return await data.json();

  const YOUR_ACCESS_KEY = "hr9YGGFtBcjGKllllP4YZAnSM4w1PRBK2d_vLPplYdU";
  console.log(data);
  const userInfo = data["users"].find((user) => user["username"] === username);

  /*
  const cover_pic = await axios.get(
    ` https://picsum.photos/seed/picsum/200/300`
  );
  //.get(`https://api.unsplash.com/photos/random?client_id=${YOUR_ACCESS_KEY}`)

  const avatar = await axios.get(` https://picsum.photos/seed/picsum/200/300`);*/

  userInfo.avatar = "https://picsum.photos/200?random=2";
  userInfo.cover_pic = "https://picsum.photos/1300/1200?random=1";

  console.log(userInfo);

  return userInfo;
};

export const getUsernamePosts = (username) => {};
export const getUsernameTimeline = (username) => {};

export const isUsernameValid = () => {};
