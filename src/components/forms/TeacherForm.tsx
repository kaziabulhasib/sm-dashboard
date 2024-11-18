"use client";

import { z } from "zod";

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "userName must be 3 character minimum" })
    .max(20, { message: "userName must be 20 character maximum" }),
  email: z.string().email({ message: "invaild email" }),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 character long" }),
  firstName: z.string().min(1, { message: "first Name is required" }),
  lastName: z.string().min(1, { message: "lastName is required" }),
  phone: z.string().min(1, { message: "phone is required" }),
  address: z.string().min(1, { message: "address is required" }),
  birthday: z.date({ message: "birthday is required" }),
  sex: z.enum(["male", "female", "others"], { message: "sex is required " }),
  image: z.instanceof(File, { message: "image is required" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data: any;
}) => {
  return <form className=''>TeacherForm</form>;
};

export default TeacherForm;
