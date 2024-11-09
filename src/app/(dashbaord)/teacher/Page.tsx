import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const TeacherPage = () => {
  return (
    <div className='flex flex-col xl:flex-row p-4 gap-4 flex-1'>
      {/* LEFT  */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule </h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}

      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
