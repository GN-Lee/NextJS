import Profile from "@/components/profile/profile";

export default async function Home() {
  const champ = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await champ.json();
  return (
    <div className="grid grid-cols-10 gap-4 justify-center">
      {Object.values(data.data).map((v: any) => (
        <Profile image={v.image.full} name={v.id} key={v.id} />
      ))}
    </div>
  );
}
