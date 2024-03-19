function ActorCard(props) {
  const { actor } = props;

  const imgStyle = {
    width: "5rem",
  };

  return (
    <tr>
      <td>
        <img src={actor.pictureUrl} style={imgStyle} />
      </td>
      <td>{actor.name}</td>
      <td>{actor.popularity.toFixed(2)}</td>
      <td>{actor.wonOscar && "🏆"}</td>
      <td>{actor.wonEmmy && "🌟"}</td>
      <td>
        <button onClick={() => props.deleteActor(actor.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ActorCard;
