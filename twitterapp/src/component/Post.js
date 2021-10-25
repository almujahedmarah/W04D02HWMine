import "../style.css";

function Post(props) {
  return (
    <div className="postCard">
      <h3>User Name: {props.name}</h3>
      <br />
      <img src={props.img} alt="ing" />
      <br />
      <h3> Tweets:</h3>
      <br />
      <div>
        <ul>
          {props.tweets.map((tweet) => (
            <li> {tweet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;
