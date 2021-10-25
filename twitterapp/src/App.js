import "./App.css";
import Post from "./component/Post";
function App() {
  let tweetsArray = ["Hello there", "Good morning"];
  let tweetsArray2 = ["Good morning"];
  let tweetsArray3 = ["Hi"];

  return (
    <div className="App">
      <Post
        name="Ahmad"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXmio3K6faGPq8q2Dgg8cE7MQ5OAQ1xjpYdqkLHtdQei8pRPRySd4Lxu59dm7jHJEa1Q&usqp=CAU"
        tweets={tweetsArray}
      />
      <hr />
      <Post
        name="Abdullah"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9t938b4mnK8lOxPHIjnwM8ev0DMKSsFFfGcXlcbjX9H5cqNtWMl9DihdfmrUx_EBi0A&usqp=CAU"
        tweets={tweetsArray2}
      />
      <hr />
      <Post
        name="Marah"
        img="https://w7.pngwing.com/pngs/550/169/png-transparent-user-profile-computer-icons-user-interface-female-symbol-miscellaneous-purple-logo.png"
        tweets={tweetsArray3}
      />
    </div>
  );
}

export default App;
