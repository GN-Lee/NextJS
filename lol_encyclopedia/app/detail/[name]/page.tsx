import { Champion } from "@/components/detail/type";

type DetailPageProps = {
  params: { name: string };
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const { name } = params;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json();
  const Champion: Champion[] = Object.values(data.data);
  const ChampName: any = Champion.filter((v: any) => v.name == decodeURI(name));
  const newChamp = { ...ChampName };
  const last = newChamp[0];
  return (
    <div>
      {last ? (
        <>
          <h1>롤 챔프: {last.name}</h1>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${last.image.full}`}
            alt={last.name}
          />
          <p>{last.title}</p>
          <p>{last.blurb}</p>
          <p>{last.partype}</p>
          <p>{last.key}</p>
          <p>{last.tags}</p>
        </>
      ) : (
        <p>챔피언을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default DetailPage;
