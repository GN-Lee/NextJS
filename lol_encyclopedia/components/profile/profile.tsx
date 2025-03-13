import Image from "next/image";

type Profile = {
  image: string;
  name: string;
};
const Profile = ({ image, name }: Profile) => {
  return (
    <div>
      <h3>{name}</h3>
      <Image
        width={96}
        height={96}
        src={`http://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image}`}
        alt={name}
      />
    </div>
  );
};

export default Profile;
