import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { IProduct } from "../consts/consts";

interface Props extends IProduct {
  className?: string;
}

export const CardContent: React.FC<Props> = ({
  className,
  imageUrl,
  title,
  alt,
  type,
  price,
  likeable = true,
}) => {
  const [liked, setLiked] = useState(false);
  function setLike(e: React.MouseEvent) {
    e.stopPropagation();
    setLiked(!liked);
  }
  return (
    <>
      <div className="absolute top-[25px] left-[25px]">
        {likeable &&
          (liked ? (
            <FaHeart onClick={setLike} size={20} className="cursor-pointer" />
          ) : (
            <FaRegHeart
              onClick={setLike}
              size={20}
              className="cursor-pointer"
            />
          ))}
      </div>
      <div className="mt-[25px] mb-[50px] px-5 flex flex-col items-center">
        <div className="w-[151px] h-[292px] flex justify-center items-center">
          <Image
            className="mb-2"
            src={imageUrl}
            alt={alt}
            width={151}
            height={292}
          />
        </div>
        {type === "category" && (
          <p className="text-center break-all">{title}</p>
        )}
        {type === "product" && (
          <div className="flex items-start justify-between gap-3 w-full">
            <p className="break-all">{title}</p>
            <p className="text-[#FFA542]">{price && `${price} руб.`}</p>
          </div>
        )}
      </div>
    </>
  );
};
