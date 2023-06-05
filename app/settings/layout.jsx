import { Header, SettingsSidebar } from "@components";
import { settingsRoutes } from "@constants";
import "@styles/globals.css";

export const metadata = {
  title: "Settings",
  description: "The official twitter clone for youtube tutorials",
};

export default function SettingsLayout({ children }) {
  return (
    <div className="w-full border-x min-h-screen flex flex-col">
      <Header title="Settings" arrow />
      <div className="settings__container flex-1 flex">
        <div className="settings__sidabar border-r w-[30%]">
          <SettingsSidebar />
        </div>
        <div className="settings__content w-[70%] p-4">{children}</div>
      </div>
    </div>
  );
}
