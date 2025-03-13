import Link from "next/link";

const MenuPage = () => {
  return (
    <div>
      <p>자 골라골라~</p>
      <div className="flex gap-7">
        <Link href={"/menu/1"}>아메리카노로 가버리기</Link>
        <Link href={"/menu/2"}>라떼로 가버리기</Link>
        <Link href={"/menu/3"}>민초는 언제나 환영한다 </Link>
      </div>
    </div>
  );
};

export default MenuPage;
