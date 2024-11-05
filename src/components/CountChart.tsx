"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "total",
    count: 100,
    fill: "white",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#FAE27C",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#C3EBFA",
  },
];
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* title  */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='more' width={20} height={20} />
      </div>
      {/* chart  */}
      <div className='relative w-full h-3/4'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}>
            <RadialBar background dataKey='count' />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src='/maleFemale.png'
          alt='more'
          width={60}
          height={60}
          className='absolute top-[40%] left-[38%]'
        />
      </div>
      {/* bottom  */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-4 h-4 rounded-full bg-lamaSky'></div>
          <h1 className='text-sm font-bold'>1234</h1>
          <h2 className='text-xs font-light text-gray-300'>Boys(55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-4 h-4 rounded-full bg-lamaYellow'></div>
          <h1 className='text-sm font-bold'>1234</h1>
          <h2 className='text-xs font-light text-gray-300'>Girls(45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
