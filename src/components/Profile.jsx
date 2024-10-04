import { getImageUrl } from './utils.js';

export default function Profile({profile}) {
    const image = profile.imageId
  return (
    <section className="profile">
      <h2>{profile.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(profile.imageId)}
        alt={profile.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profile.profession}
        </li>
        <li>
          <b>Awards: {profile.awards} </b>
          {profile.awardsName}
        </li>
        <li>
          <b>Discovered: </b>
         {profile.discovered}
        </li>
      </ul>
    </section>
  );
}
