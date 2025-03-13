const MenuIdPage = ({ params }) => {
  const { id } = params;
  const cafeMenu = {
    1: "아메리카노",
    2: "라떼",
    3: "민초",
  };
  return <div>{cafeMenu[id] || "그런 메뉴는 없습니다!"}</div>;
};

export default MenuIdPage;
