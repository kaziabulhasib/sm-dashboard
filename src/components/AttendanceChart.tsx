"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Monday",
    present: 40,
    absent: 80,
  },
  {
    name: "Tuesday",
    present: 70,
    absent: 50,
  },
  {
    name: "Wednesday",
    present: 90,
    absent: 70,
  },
  {
    name: "Thursday",
    present: 80,
    absent: 60,
  },
  {
    name: "Friday",
    present: 70,
    absent: 50,
  },
  {
    name: "Saturday",
    present: 40,
    absent: 90,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full '>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' width={20} height={20} alt='' />
      </div>
      <div className='h-full'>
        <ResponsiveContainer width='100%' height='90%'>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='present' fill='#FAE27C' />
            <Bar dataKey='absent' fill='#C3EBFA' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
