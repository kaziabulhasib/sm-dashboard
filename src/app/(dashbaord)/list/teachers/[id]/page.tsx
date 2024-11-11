import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row  gap-4'>
      {/* left  */}
      <div className='w-full xl:w-2/3'>
        {/* top  */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* user info card  */}
          <div className='bg-lamaSky px-4 py-6 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image
                src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt=''
                width={144}
                height={144}
                className='h-36 w-36 rounded-full'
              />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
              <h1 className='text-xl font-semibold'>Leonard Snyder</h1>
              <p className='text-sm text-gray-500'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/blood.png' alt='' width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/date.png' alt='' width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/mail.png' alt='' width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/phone.png' alt='' width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards  */}
          <div className='flex-1'></div>
        </div>
        {/* Bottom  */}
        <div className=''>Schedule</div>
      </div>
      {/* right  */}
      <div className='w-full xl:w-1/3'>r</div>
    </div>
  );
};

export default SingleTeacherPage;
