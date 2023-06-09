import Image from "next/image";

const ProfilePicture = ({ hasBorder, isLarge, onClick, src }) => {
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-10"}
        ${isLarge ? "w-32" : "w-10 min-w-[40px]"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={src ? src : "/Images/placeholder.png"}
      />
    </div>
  );
};

export default ProfilePicture;
