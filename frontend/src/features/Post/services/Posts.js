import { highlightUsernameAndHashTagsFromText } from "../utils/TextManipulation";

export const getUserFeedPosts = () => {
  const images = importAll(
    require.context("../../../assets/", false, /\.(png|jpe?g|svg)$/)
  );

  function importAll(r) {
    return r.keys().map(r);
  }

  const posts = [
    {
      img: images[0],
      name: "Ediig Melchiior",
      username: "@EdiiG",
      checked: true,
      time: "9h",
      place: "New York",
      description: highlightUsernameAndHashTagsFromText(
        "@helly ipsum dolor sit amet, consectetur adipiscing elit, sed do @jose.steecky eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ),
      images: [
        images[0],
        images[4],
        "https://picsum.photos/1300/1200?random=2",
      ],
    },
    {
      img: images[4],
      repostName: "Júlio Augusto",
      name: "José Congo",
      checked: false,
      username: "@Partido",
      time: "9h",
      place: "California",
      description: highlightUsernameAndHashTagsFromText(
        "Lorem @rust.pie ipsum dolor sit amet, #consectetur adipiscing @elit, sed do #eiusmod #tempor #incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ),
      images: ["https://picsum.photos/1300/1200?random=1"],
    },
    {
      img: images[4],
      repostName: "Júlio Augusto",
      name: "José Congo",
      checked: false,
      username: "@Partido",
      time: "11h",
      place: "Lisbon",
      description:
        highlightUsernameAndHashTagsFromText(`@Lorem Deeply shocked by Russia’s attacks on civilians in #Kyiv and other cities in Ukraine.

            Such acts have no place in 21st #century. @Icondemn them in the strongest possible terms.
            
            We stand with #Ukraine. Additional military support from the EU is on its way. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),
      images: ["https://picsum.photos/1300/1200?random=3"],
    },
    {
      img: images[4],
      username: "@AS",
      name: "Amâncio Sassamba",
      checked: true,
      place: "Paris",
      time: "9h",
      description: highlightUsernameAndHashTagsFromText(
        "@Lorem ipsum dolor sit amet, #consectetur adipiscing @elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ),
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/250/300",
        "https://picsum.photos/400/300",
        "https://picsum.photos/1300/1200?random=3",
        "https://picsum.photos/1300/1200?random=4",
        "https://picsum.photos/1300/1200?random=5",
      ],
    },
  ];

  return posts;
};

export const getUserTimelinePosts = () => {};

export const makePost = () => {};

export const editPost = () => {};

export const commentPost = () => {};

export const likePost = () => {};
