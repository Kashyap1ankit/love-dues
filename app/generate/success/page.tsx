"use client";

import { Copy, CopyCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function SuccessfullyGenerated() {
  const searchParams = useSearchParams();
  const messageId = searchParams.get("id") || "";
  const clientUrl = process.env.NEXT_PUBLIC_BASE_CLIENT_URL || "";
  const link = `${clientUrl}/refund/${messageId}`;
  const [copyClicked, setCopyClicked] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(link);
    setCopyClicked(true);
    setTimeout(() => {
      setCopyClicked(false);
    }, 2000);
  }

  return (
    <div className="bg-customFormPink p-4  md:p-12 rounded-lg max-w-xl mx-auto flex flex-col gap-6 border-2 border-customBtnPink mb-4 w-11/12 md:w-fit mx-auto max-w-7xl">
      <IoCheckmarkCircleSharp className="size-16 fill-green-800 mx-auto" />

      <p>
        <strong>Congratulations!</strong> Your Refund Request Has Been...
        Generated🥳{" "}
      </p>

      <div className="flex items-center justify-between bg-customPink p-4 rounded-lg flex-wrap">
        <Link
          href={link}
          className="hover:text-blue-500 truncate min-w-0 max-w-[80%]"
        >
          {link.slice(0, 50)}
        </Link>
        <div className="flex-shrink-0">
          {copyClicked ? (
            <CopyCheck className="text-green-500" />
          ) : (
            <Copy className="cursor-pointer" onClick={handleCopy} />
          )}
        </div>
      </div>

      <div>
        <p className="text-center text-xl mb-4 ">Share to</p>

        <div className="flex gap-4 justify-between">
          <WhatsappShareButton url={link}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>

          <TwitterShareButton url={link}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={link}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>

          <FacebookShareButton url={link}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <RedditShareButton url={link}>
            <RedditIcon size={32} round={true} />
          </RedditShareButton>
        </div>
      </div>

      <Link
        href={"/"}
        className="text-center text-sm text-gray-500 hover:text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
