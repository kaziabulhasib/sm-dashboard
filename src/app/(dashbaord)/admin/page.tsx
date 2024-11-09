import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";

import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
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
        <div className='w-full  h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      {/* right  */}
      <div className='w-full lg:w-1/3 flex flex-col gap-4'>
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
