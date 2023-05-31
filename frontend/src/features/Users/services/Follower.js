import img from "../../../assets/christinelagarde.jpg";
import img2 from "../../../assets/jorgefonseca.jpg";

export const getSuggestedPeopleToFollow = () => {
  //do  REST calls
  const data = [
    {
      name: "Chris Lagarde",
      username: "@cris_lagarde",
      checked: true,
      img: img,
    },
    {
      name: "Jorge Fonseca",
      username: "@jorgePRfonseca",
      checked: true,
      img: img2,
    },
  ];

  return data;
};
