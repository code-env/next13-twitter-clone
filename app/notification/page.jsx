"use client";

import { Header, HomeSidebar } from "@components";

const Notification = () => {
  return (
    <div className="min-h-screen flex w-full">
      <div className="settings__container flex-1 border-x">
        <Header arrow={true} title="Notifications" />
      </div>
      <HomeSidebar />
    </div>
  );
};

export default Notification;
