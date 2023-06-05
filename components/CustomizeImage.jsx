import Image from "next/image";

const ProfilePicture = ({ src, height, width, className, alt }) => {
  return (
    <Image
      src={src}
      height={height}
      width={width}
      className={className}
      alt={alt}
    />
  );
};

export default ProfilePicture;
