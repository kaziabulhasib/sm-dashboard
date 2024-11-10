type MyParams = {
  id: string;
};

const AchivementPage = ({ params }: { params: MyParams }) => {
  return (
    <div className=''>
      <h1>achivement no : {params.id}</h1>
    </div>
  );
};

export default AchivementPage;
