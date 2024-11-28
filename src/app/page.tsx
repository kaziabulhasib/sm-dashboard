import Link from "next/link";

const HomePage = () => {
  return (
    <div className=''>
      <h1 className='text-2xl text-center py-6'>
        School Management System HomePage
      </h1>
      <div className='flex justify-center'>
        <Link className='py-8 text-center hover:underline ' href='/admin'>
          Go To admin Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
