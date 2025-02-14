"use server";

import { prisma } from "@/utils/db";
import {
  formValidator,
  formValidatorType,
} from "@/utils/validator/form.validator";

export async function addMessage(formData: formValidatorType) {
  try {
    const { success } = formValidator.safeParse(formData);
    if (!success) throw new Error("Validation Error");

    if (!formData.compensation) throw new Error("Compensation Not found");

    const returnData = await prisma.receipt.create({
      data: formData,
      select: {
        id: true,
        compensation: true,
      },
    });

    return {
      status: 200,
      message: "Successfully created",
      data: returnData,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      data: null,
    };
  }
}

export async function checkForRefundId(id: string) {
  try {
    const isInDb = await prisma.receipt.findFirst({
      where: {
        id,
      },
    });

    if (!isInDb) throw new Error("No such refund if found in db");

    return {
      status: 200,
      data: isInDb,
    };
  } catch {
    return {
      status: 400,
      data: null,
    };
  }
}
