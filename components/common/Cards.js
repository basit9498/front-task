import { textWrap } from "@/helper/textWrap";
import Image from "next/image";
import React from "react";

const Cards = ({ data, bookmark = false }) => {
  return (
    <>
      <div className="border rounded-lg p-3 group hover:shadow-xl relative transition-all cursor-pointer">
        {bookmark && (
          <Image
            src={"/image/bookmark.svg"}
            className="absolute top-2 right-3 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
            alt=""
            height={35}
            width={24}
          />
        )}
        <div className="px-2">
          <Image
            src={data?.src}
            height={50}
            width={50}
            className=" object-contain"
            alt=""
          />
        </div>
        <div className="mt-3">
          <h4 className="text-textColor font-bold text-xl">{data?.name}</h4>
          <p className="text-sm mt-2 text-gray-500">
            {textWrap(
              "  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
              50
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
