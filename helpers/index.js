const url = "http://localhost:3000/api";

export const useCurrentUser = async (userId) => {
  const user = {
    id: 45657899,
    username: "codeenv",
    email: "codeenv@gmail.com",
    profileImage: "",
    followers: [
      {
        user: 567879087,
      },
      {
        user: userId,
      },
    ],
    followings: [
      {
        user: 23456789,
      },
      {
        user: userId,
      },
    ],
  };


  return user;
};
