"use client";

import { useCurrentUser } from "@helpers";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfileEdit = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await useCurrentUser(35467890);
      setCurrentUser(user);
    };
    getCurrentUser();
  });

  return (
    <div className="flex flex-col gap-4 bg-red-500 w-full">
      <div className="image__container ">
        <div className="coverContainer">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
