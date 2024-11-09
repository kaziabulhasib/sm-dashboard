import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
  return (
    <div className='bg-white rounded-md flex-1  m-4 mt-0 p-4'>
      {/* TOP */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex gap-4 items-center self-end'>
            <button className='w-8 h-8 flex justify-center items-center rounded-full  bg-lamaYellow'>
              <Image
                src='/filter.png'
                alt='filter image'
                width={14}
                height={14}
              />
            </button>
            <button className='w-8 h-8 flex justify-center items-center rounded-full  bg-lamaYellow'>
              <Image
                src='/sort.png'
                alt='filter image'
                width={14}
                height={14}
              />
            </button>
            <button className='w-8 h-8 flex justify-center items-center rounded-full  bg-lamaYellow'>
              <Image
                src='/plus.png'
                alt='filter image'
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <div className=''></div>
      {/* Pagination */}
      <div className=''></div>
    </div>
  );
};

export default TeacherListPage;
