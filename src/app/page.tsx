import Link from "next/link";

const HomePage = () => {
  return (
    <div className=''>
      <h1 className='text-2xl text-center py-6'>
        School Management System HomePage
      </h1>
      <div className='flex justify-center'>
        <Link
          className='my-8 px-6 py-4 border rounded-md font-medium text-center text-xl hover:bg-gray-700 hover:text-white '
          href='/admin'>
          Go To admin Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
