"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  img: z.instanceof(File, { message: "image is required" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-8'>
      <h1 className='text-xl font-semibold'>Create a new teacher</h1>
      <span className='text-xs font-medium text-gray-400'>
        Authentication Information{" "}
      </span>
      <input
        type='text'
        {...register("userName")}
        className='ring-[1.5px] ring-gray-300 text-sm p-2 rounded-md'
      />
      {errors.userName?.message && (
        <p className='text-red-500'>{errors.userName?.message.toString()}</p>
      )}
      <span className='text-xs font-medium text-gray-400'>
        Personal Information
      </span>
      <button className='bg-blue-400 text-white rounded-md'>
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
