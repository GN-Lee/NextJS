import { Champion } from "@/components/detail/type";
import Profile from "@/components/profile/profile";

export default async function Home() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json();
  const Champion: Champion[] = Object.values(data.data);
  return (
    <div className="grid grid-cols-10 gap-4 justify-center">
      {Champion.map((v: any) => (
        <Profile key={v.id} image={v.image.full} name={v.name} />
      ))}
    </div>
  );
}
