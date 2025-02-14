"use client";
import { useForm } from "react-hook-form";
import {
  formValidator,
  formValidatorType,
} from "@/utils/validator/form.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { heebo, signika } from "@/utils/font";
import {
  FaArrowLeft,
  FaClock,
  FaUser,
  FaUserTimes,
  FaHeartBroken,
} from "react-icons/fa";
import { FaCreditCard, FaCircleQuestion, FaSpinner } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";
import { RiKnifeFill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import { calCompensation } from "@/utils/compensation";
import { addMessage } from "@/app/actions/add-message";
import { useRouter } from "next/navigation";
import { Slide, toast } from "react-toastify";
import { useState } from "react";

export default function GeneratePayMentForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formValidatorType>({
    resolver: zodResolver(formValidator),
  });

  const router = useRouter();

  const successToast = () =>
    toast.success("😁Receipt Created", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const errorToast = (msg: string) =>
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  async function onFormSubmit(formData: formValidatorType) {
    try {
      setSubmitting(true);
      const cal = calCompensation(
        Number(formData.timeInvested),
        Number(formData.moneySpent),
        Number(formData.emotionalDamage),
        Number(formData.betrayal)
      );
      formData.compensation = cal;

      const response = await addMessage(formData);

      if (response.status !== 200) throw new Error(response.message);

      successToast();
      reset();
      router.push(`/generate/success?id=${response.data?.id}`);
    } catch (error) {
      errorToast((error as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="bg-customFormPink p-12 rounded-lg max-w-xl mx-auto flex flex-col gap-6 border-2 border-customBtnPink mb-4"
      >
        <div className="flex justify-start gap-24 ">
          <Link href={"/"}>
            <FaArrowLeft />
          </Link>
          <p className={`${signika.className} text-center text-3xl font-bold`}>
            Get Your Refund !
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2 items-center  font-bold ">
            <FaUser />
            <p className={`${heebo.className} `}>Your Name</p>
          </label>
          <input
            {...register("name")}
            className="bg-customLightPink p-2 rounded-lg border-2 border-neutral-600 outline-0 bg-customSecondaryBlack w-full"
            placeholder="Rohit Sharma"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2 items-center  font-bold ">
            <FaUserTimes />
            <p className={`${heebo.className} `}>Ex Name</p>
          </label>
          <input
            {...register("exName")}
            className=" bg-customLightPink p-2 rounded-lg border-2 border-neutral-600 outline-0 bg-customSecondaryBlack w-full"
            placeholder="Kavya Gupta"
          />
          {errors.exName && (
            <p className="text-red-500 text-sm">{errors.exName.message}</p>
          )}
        </div>

        <div className="md:flex  gap-8">
          <div className="flex flex-col gap-2">
            <label className="flex gap-2 items-center  font-bold ">
              <FaClock />
              <p className={`${heebo.className} `}>Time Invested (in month)</p>
            </label>
            <input
              {...register("timeInvested", { valueAsNumber: true })}
              className=" bg-customLightPink p-2 rounded-lg border-2 border-neutral-600 outline-0 bg-customSecondaryBlack w-full"
              placeholder="24"
              type="number"
            />
            {errors.timeInvested && (
              <p className="text-red-500 text-sm">
                {errors.timeInvested.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex gap-2 items-center  font-bold ">
              <FaCreditCard />
              <p className={`${heebo.className} `}>Money Spent(₹)</p>
            </label>
            <input
              {...register("moneySpent", { valueAsNumber: true })}
              className=" bg-customLightPink p-2 rounded-lg border-2 border-neutral-600 outline-0 bg-customSecondaryBlack w-full"
              placeholder="24"
              type="number"
            />
            {errors.moneySpent && (
              <p className="text-red-500 text-sm">
                {errors.moneySpent.message}
              </p>
            )}
          </div>
        </div>

        <div className="md:flex  gap-8">
          <div className="flex flex-col gap-2 w-full">
            <label className="flex gap-2 items-center  font-bold ">
              <FaHeartBroken />
              <p className={`${heebo.className} `}>Emotional Damage(1-10)</p>
            </label>
            <Slider
              {...register("emotionalDamage", { valueAsNumber: true })}
              defaultValue={[1]}
              min={1}
              max={10}
              step={1}
            />
            {errors.emotionalDamage && (
              <p className="text-red-500 text-sm">
                {errors.emotionalDamage.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="flex gap-2 items-center  font-bold ">
              <RiKnifeFill />
              <p className={`${heebo.className} `}>Betrayal Level(0-5)</p>
            </label>
            <Slider
              {...register("betrayal", { valueAsNumber: true })}
              defaultValue={[0]}
              min={0}
              max={5}
              step={1}
            />
            {errors.betrayal && (
              <p className="text-red-500 text-sm">{errors.betrayal.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-2 items-center  font-bold ">
            <FaCircleQuestion />
            <p className={`${heebo.className} `}>Reason</p>
          </label>
          <textarea
            {...register("reason")}
            className=" bg-customLightPink p-2 rounded-lg border-2 border-neutral-600 outline-0 bg-customSecondaryBlack w-full resize-none no-scrollbar"
            placeholder="Kavya Gupta"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm">{errors.reason.message}</p>
          )}
        </div>
        <Button
          className="bg-customBtnPink hover:bg-customBtnPink"
          disabled={submitting}
        >
          {submitting ? (
            <FaSpinner className="text-center animate-spin" />
          ) : (
            <p>Create Refund Form</p>
          )}
        </Button>
      </form>
    </div>
  );
}
