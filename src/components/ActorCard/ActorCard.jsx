export const ActorCard = ({ actor }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt=""
        width={120}
      />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </>
  );
};
