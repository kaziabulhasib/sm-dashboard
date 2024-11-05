import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] '>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white rounded-full px-2 py-1 text-green-500'>
          12/12
        </span>
        <Image src='/more.png' alt='more' width={20} height={20} />
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,234</h1>
      <h2 className='text-gray-500 font-medium text-sm capitalize'>{type}</h2>
    </div>
  );
};

export default UserCard;
