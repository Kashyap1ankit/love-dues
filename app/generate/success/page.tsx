"use client";

import { Copy, CopyCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function SuccessfullyGenerated() {
  const searchParams = useSearchParams();
  const messageId = searchParams.get("id") || "";
  const clientUrl = process.env.NEXT_PUBLIC_BASE_CLIENT_URL || "";
  const link = `${clientUrl} / ${messageId}`;
  const [copyClicked, setCopyClicked] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(link);
    setCopyClicked(true);
    setTimeout(() => {
      setCopyClicked(false);
    }, 2000);
  }

  return (
    <div className="bg-customFormPink p-12 rounded-lg max-w-xl mx-auto flex flex-col gap-6 border-2 border-customBtnPink mb-4">
      <IoCheckmarkCircleSharp className="size-16 fill-green-800 mx-auto" />

      <p>
        <strong>Congratulations!</strong> Your Refund Request Has Been...
        Generated🥳{" "}
      </p>

      <div className="flex justify-between items-center bg-customPink p-4 rounded-lg">
        <Link href={link} className="hover:text-blue-500">
          {link.slice(0, 50)}
        </Link>
        {copyClicked ? (
          <CopyCheck className="text-green-500" />
        ) : (
          <Copy className="cursor-pointer" onClick={handleCopy} />
        )}
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
