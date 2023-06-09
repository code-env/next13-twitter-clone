const url = "http://localhost:3000/api";

export const useCurrentUser = async (userId) => {
  const user = {
    id: 35467890,
    username: "codeenv",
    email: "codeenv@gmail.com",
    profileImage: "",
    coverImage: null,
    followers: [
      {
        user: 567879087,
      },
      {
        user: 35467890,
      },
    ],
    followings: [
      {
        user: 23456789,
      },
      {
        user: 35467890,
      },
    ],
  };

  return user;
};

export const useFollowingUser = async (userId) => {
  const user = await useCurrentUser();
  const following = user.followers.find((id) => id.user === 354678903);
  return following;
};
