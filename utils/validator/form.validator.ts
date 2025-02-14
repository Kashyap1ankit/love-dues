import z from "zod";

export const formValidator = z.object({
  name: z.string().min(3, { message: "Make it little long" }),
  exName: z.string().min(3, { message: "Don't hesitate to name her" }),
  timeInvested: z
    .number()
    .min(1, { message: "Relationship should be greater than 1 month" }),
  moneySpent: z.number().min(1, { message: "Can't be lower than this" }),
  emotionalDamage: z
    .number()
    .min(1, { message: "Cannot be less than 1" })
    .max(10, { message: "Can't be higher than 10" }),
  betrayal: z
    .number()
    .min(0, { message: "Cannot be less than 0" })
    .max(5, { message: "Can't be higher than 5" }),
  reason: z.string().min(1, { message: "Reason for breakup is required" }),
  compensation: z.number().optional(),
});

export type formValidatorType = z.infer<typeof formValidator>;
