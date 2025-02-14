import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaQuestion } from "react-icons/fa6";

const howItWorksSteps = [
  "📝 Fill in the details.How much time, money, and emotions were wasted.",
  "⏳ The longer the relationship, the higher the base compensation.",
  "💸 From surprise gifts to paying for dates, every rupee counts.",
  "😢 Did they ghost you? Cheat? Each betrayal adds extra charges.",
  "📈 Pain Multiplier. The more they hurt you, the more they owe.",
  "⚖️ Our ultra-smart (but mostly petty) algorithm computes your refund.",
  "📩 Share the bill with your ex and demand what's rightfully yours!",
  "😂 Receive Zero Payment. But,at least you got closure and a great story!",
];

export default function HowItWorks() {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-6 right-12">
        <FaQuestion className="border-2 w-10 h-10  p-2 rounded-full bg-customBtnPink text-white" />
      </DialogTrigger>
      <DialogContent className="bg-customFormPink w-11/12 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-4">
            How it works?
          </DialogTitle>
          <DialogDescription className=" flex flex-col gap-4 text-gray-600">
            {howItWorksSteps.map((e, i) => {
              return <p key={i}>{e}</p>;
            })}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
