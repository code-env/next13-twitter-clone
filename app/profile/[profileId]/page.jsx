"use client";

import { CustomizeImage, Header, HomeSidebar } from "@components";

const Profile = () => {
  return (
    <div className="min-h-screen flex">
      <div className="profile__container border-x flex-1">
        <Header arrow={true} title="username" />
        <div className="bg-black w-full relative">
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
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Profile;
