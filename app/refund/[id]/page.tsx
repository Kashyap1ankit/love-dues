"use client";
import { checkForRefundId } from "@/app/actions/add-message";
import { Button } from "@/components/ui/button";
import { heebo } from "@/utils/font";
import { HeartCrack } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaClock, FaMoneyBill } from "react-icons/fa6";
import { RiKnifeFill } from "react-icons/ri";

export default function RefundId() {
  const { id }: { id: string } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({}); //eslint-disable-line

  useEffect(() => {
    const checkForId = async () => {
      try {
        setLoading(true);
        if (!id) throw new Error("No id found");
        const response = await checkForRefundId(id);
        if (response.status !== 200) throw new Error("Not found");
        setData(response.data);
      } catch {
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    checkForId();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-11/12 mx-auto max-w-7xl">
          <div className="flex justify-end mb-12 md:mb-0">
            <Link href={"/generate"}>
              <Button>Make a receipt for your ex</Button>
            </Link>
          </div>

          <div className="max-w-lg mx-auto mb-4">
            <div className="flex items-center justify-center gap-4 items-center bg-customBtnPink px-6 py-4 rounded-t-md">
              <HeartCrack className="text-white size-8" />
              <p className={`${heebo.className} text-3xl font-bold text-white`}>
                Emotional Damage Receipt
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-customFormPink px-4 py-6">
              <div className="flex justify-between">
                <p>
                  <strong>From</strong>: {data?.name}
                </p>
                <p>
                  <strong>To</strong>: {data?.exName}
                </p>
              </div>
              <hr className=" border-2 border-customBtnPink" />

              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaClock />
                    <strong>Time spent:</strong>
                  </div>
                  <p>
                    {Math.floor(data?.timeInvested / 12)}year,{" "}
                    {data?.timeInvested % 12}month
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaMoneyBill />
                    <strong>Money spent:</strong>
                  </div>

                  <p>₹{data?.moneySpent}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <HeartCrack className="text-black" />
                    <strong>Emotional Damage:</strong>
                  </div>

                  <p>{data?.emotionalDamage}/10</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <RiKnifeFill />
                    <strong>Betrayal Scale:</strong>
                  </div>
                  <p>{data?.betrayal}/5</p>
                </div>
              </div>

              <hr className=" border-2 border-customBtnPink" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaQuestionCircle />
                  <strong>Reason </strong>
                </div>
                <p className="bg-white p-4 rounded-lg">{data.reason}</p>
              </div>
              <hr className=" border-2 border-customBtnPink" />
              <div className="flex flex-col  items-end font-bold text-customBtnPink text-2xl">
                <p>Total Compensation Due:</p>
                <p>₹{data.compensation}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 items-center bg-customBtnPink px-6 py-4 rounded-b-md">
              <p className={`${heebo.className} text-sm text-white`}>
                This receipt is for emotional purposes only. Not valid in any
                court of law.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
