const FishIdPage = ({ params }) => {
  const { id } = params;
  const fishobj = {
    0: "니모",
    1: "도리",
    2: "피즈",
    3: "지헌",
  };

  return <div>물고기 {fishobj[id]} ㅎㅇ?</div>;
};

export default FishIdPage;
