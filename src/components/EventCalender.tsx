"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalender;
