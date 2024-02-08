import data from "./../data.json";
import classes from "./postInput.module.css";

function PostInput({ textWords, uRef, tagValue, sendData }) {
  return (
    <main className={classes.inputBox}>
      <img
        src={data.currentUser.image.png}
        alt="user"
        className={classes.image}
      />
      <textarea
        placeholder="Add a comment....."
        type="text"
        className={classes.input}
        onChange={textWords}
        ref={uRef}
        value={tagValue}
      />
      <div className={classes.send} onClick={sendData}>
        send
      </div>
    </main>
  );
}

export default PostInput;
