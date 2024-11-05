import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className='flex flex-row md:flex-row p-4 gap-4'>
      {/* left  */}
      <div className='w-full lg:w-2/3 '>
        {/* user cards  */}
        <div className='flex justify-between gap-4 flex-wrap'>
          <UserCard type='students' />
          <UserCard type='teachers' />
          <UserCard type='parents' />
          <UserCard type='stuff' />
        </div>
      </div>
      {/* right  */}
      <div className='w-full lg:w-1/3 bg-blue-300'>r</div>
    </div>
  );
};

export default AdminPage;
