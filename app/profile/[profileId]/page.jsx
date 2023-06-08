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
import { useCurrentUser } from "@helpers";
import { useEffect, useState } from "react";

const Profile = () => {
  // const { data: session } = useSession();
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await useCurrentUser(35467890);
      setCurrentUser(user);
    };

    getCurrentUser();
  }, []);

  const followingUser = currentUser?.followers?.find((id) => id);
  console.log(followingUser, profileId);

  const getUser = () => {
    if (currentUser.id === profileId) {
      return "Edit Profile";
    } else if (followingUser) {
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
          <CustomizeImage
            alt="cover picture of username"
            width={600}
            height={200}
            src="/Images/cover.png"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-1 rounded-full h-[150px] w-[150px] bg-white absolute bottom-[-75px] left-[30px]">
            <CustomizeImage
              alt="profile picture of username"
              src="/Images/user1.jpg"
              width={150}
              height={150}
              className="rounded-full w-full h-full"
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
