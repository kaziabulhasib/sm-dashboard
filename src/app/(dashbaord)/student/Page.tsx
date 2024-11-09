import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalender from "@/components/EventCalender";

const StudentPage = () => {
  return (
    <div className='flex flex-col xl:flex-row p-4 gap-4'>
      {/* LEFT  */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}

      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
