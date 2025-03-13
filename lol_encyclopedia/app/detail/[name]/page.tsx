type DetailPageProps = {
  params: { name: string };
};

const DetailPage = ({ params }: DetailPageProps) => {
  const { name } = params;
  return <div>롤 챔프 : {name}</div>;
};

export default DetailPage;
