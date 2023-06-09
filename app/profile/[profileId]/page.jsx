"use client";

import {
  ButtonContainer,
  CustomizeImage,
  Header,
  HomeSidebar,
} from "@components";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { openModal } from "@redux/slice/modalSlice";
import { useCurrentUser, useFollowingUser } from "@helpers";
import { useEffect, useState } from "react";

const Profile = () => {
  // const { data: session } = useSession();
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [isFollingUser, setIsFollowingUser] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await useCurrentUser(35467890);
      const followingUser = await useFollowingUser(profileId);
      setIsFollowingUser(followingUser?.user);
      setCurrentUser(user);
    };

    getCurrentUser();
  }, []);

  console.log(currentUser.id.toString() === profileId);

  const getUser = () => {
    if (currentUser.id.toString() === profileId) {
      return "Edit Profile";
    } else if (isFollingUser?.toString() === profileId) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  };

  const handleClick = async () => {
    const type = getUser();
    if (type === "Edit Profile") {
      dispatch(openModal("profileedit"));
    } else if (type === "Unfollow") {
      try {
        //logic to follow and unfollow user
        console.log(type);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log(type);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="border-x flex-1">
        <Header arrow={true} title="username" />
        <div className="w-full relative">
          <div className="h-44 bg-black relative">
            <CustomizeImage
              alt="cover picture of username"
              src="/Images/cover.png"
              className="object-cover"
            />
          </div>
          <div className="p-1 rounded-full bg-white flex items-center justify-center absolute bottom-[-75px] left-[30px]">
            <CustomizeImage
              alt="profile picture of username"
              src="/Images/user1.jpg"
              className="rounded-full"
              isLarge
            />
          </div>
        </div>
        <div
          className="
           flex 
           justify-end
           mt-4
           pr-4
           "
        >
          <ButtonContainer
            label={getUser()}
            black
            rounded
            onClick={handleClick}
          />
        </div>
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Profile;
