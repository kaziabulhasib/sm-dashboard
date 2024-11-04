import Image from "next/image";

const Navbar = () => {
  return (
    <div className='flex  items-center justify-between p-4 '>
      {/* search bar  */}
      <div className='hidden md:flex items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2 rounded-full'>
        <Image src='/search.png' width={14} height={14} alt='' />
        <input
          type='text'
          placeholder='search ........'
          className='w-[200px] p-2 bg-transparent outline-none'
        />
      </div>
      {/* icons & user */}
      <div className='w-full flex items-center justify-end gap-6 '>
        <div className='flex justify-center items-center bg-white rounded-full w-7 h-7'>
          <Image src='/message.png' width={20} height={20} alt='' />
        </div>
        <div className='flex justify-center items-center bg-white rounded-full w-7 h-7 relative'>
          <Image src='/announcement.png' width={20} height={20} alt='' />
          <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full flex justify-center items-center bg-purple-500 text-white'>
            3
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-gray-500 text-[10px] text-right'>Admin</span>
        </div>
        <Image
          src='/avatar.png'
          alt=''
          width={36}
          height={36}
          className='rounded-full'
        />
      </div>
    </div>
  );
};

export default Navbar;
