import Image from "next/image";
import Link from "next/link";

type Profile = {
  image: string;
  name: string;
};
const Profile = ({ image, name }: Profile) => {
  return (
    <div>
      <Link href={`/detail/${name}`}>
        <p>{name}</p>
        <Image
          width={96}
          height={96}
          src={`http://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image}`}
          alt={name}
        />
      </Link>
    </div>
  );
};

export default Profile;
