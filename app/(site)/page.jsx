"use client";

import { Header, HomeSidebar, Posts, Share } from "@components";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  console.log(session?.user);
  return (
    <div className="flex w-full min-h-screen">
      <div className="home__preview border-x w-[70%]  max-[1024px]:w-full">
        <Header title="Home" />
        <Share />
        <Posts />
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Home;
