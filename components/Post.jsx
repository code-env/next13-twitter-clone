"use client";

import { CustomizeImage } from "@components";
import { userPosts } from "@constants";
import { openModal } from "@redux/slice/modalSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { BiComment, BiHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Post = ({ data }) => {
  const [isLiked, setisLiked] = useState(false);
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const post = userPosts.find((post) => post.id === data.id);

  const handleAddComment = async () => {
    if (!session?.user) {
      return dispatch(openModal("login"));
    }
  };

  const handleAddLike = async () => {
    if (!session?.user) {
      return dispatch(openModal("login"));
    }
    if (data.id === post.id) {
      setisLiked(true);
    } else {
      setisLiked(false);
    }

    if (isLiked && data.id === post.id) {
      setisLiked(false);
    }
  };

  return (
    <div className="w-full first:border-t border-b last:border-b-0 px-8 py-4">
      <div className="post__container flex gap-4 ">
        <CustomizeImage
          src="/Images/user1.jpg"
          height={40}
          width={40}
          alt="user profile picture"
          className="rounded-full object-cover object-top max-h-[40px] w-auto h-auto"
        />
        <div className="post__data">
          <div className="userdata">
            <p className="flex items-center gap-2">
              {data.name}
              <span className="text-gray-400">@{data.username}</span>{" "}
              <i className="text-gray-400">.</i>
              <span className="text-gray-400">1 min</span>
            </p>
          </div>
          <div className="post__content flex flex-col gap-4">
            <p className="text-gray-600">{data.text}</p>
            {data.image && (
              <div className="post__img h-80 w-full bg-black relative rounded-3xl overflow-hidden">
                <Image
                  src={data.image}
                  fill
                  alt={data.text}
                  className="object-cover "
                />
              </div>
            )}

            <div className="post__action flex items-center list-none gap-4">
              <li className="cursor-pointer">
                <BiComment size={20} onClick={handleAddComment} />
              </li>
              <li className="cursor-pointer">
                <BiHeart
                  size={20}
                  onClick={handleAddLike}
                  className={`${isLiked && "fill-rose-500"}`}
                />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
