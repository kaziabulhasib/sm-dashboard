import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";

import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className='flex flex-row md:flex-row p-4 gap-4'>
      {/* left  */}
      <div className='w-full lg:w-2/3  flex flex-col gap-8'>
        {/* user cards  */}
        <div className='flex justify-between gap-4 flex-wrap'>
          <UserCard type='students' />
          <UserCard type='teachers' />
          <UserCard type='parents' />
          <UserCard type='stuff' />
        </div>
        {/* MIDLLE CHART  */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* COUNT CHARTS  */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHARTS  */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART  */}
        <div className='w-full lg:w-2/3 h-[450px]'></div>
      </div>
      {/* right  */}
      <div className='w-full lg:w-1/3 bg-blue-300'>r</div>
    </div>
  );
};

export default AdminPage;
