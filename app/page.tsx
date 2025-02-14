import Image from "next/image";
import { signika } from "@/utils/font";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col-reverse sm:flex-row justify-between  items-center">
        <div className=" sm:w-1/2">
          <p className={`${signika.className} text-5xl md:text-6xl font-bold `}>
            <span className=" bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
              Wasted
            </span>{" "}
            Time on Ex? File a Refund Now!
          </p>

          <Link href={"/generate"} className="flex justify-center sm:block">
            <Button className="mt-12 bg-customBtnPink text-white hover:bg-customBtnPink w-full sm:w-fit">
              Create Refund Form
            </Button>
          </Link>
        </div>

        <div className=" sm:w-1/2 ">
          <Image
            src={"/hero.png"}
            width={500}
            height={500}
            alt="hero-img"
            className="w-80 h-80 mx-auto"
          />
        </div>
      </div>

      <div className="mx-auto w-full mt-24">
        <p className="text-center text-xl">
          Created by{" "}
          <Link href={"https://x.com/kashyap_tweetts"} className="font-bold ">
            Ankit Kashyap
          </Link>
        </p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <Link href={"https://x.com/kashyap_tweetts"} target="_blank">
            <FaSquareXTwitter className="size-6" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ankit-kashyap-coder/"}
            target="_blank"
          >
            <FaLinkedin className="size-6" />
          </Link>
          <Link href={"mailto:kashyap25ankit@gmail.com"} target="_blank">
            <IoMdMail className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
