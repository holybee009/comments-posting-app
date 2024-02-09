import repl from "./../../images/icon-reply.svg";
import classes from "./reply.module.css";
import minus from "./../../images/icon-minus.svg";
import plus from "./../../images/icon-plus.svg";

function Reply({
  addVote,
  lessVote,
  voteValue,
  userImage,
  userName,
  userPeriod,
  userComment,
  userReplied,
  newReply,
}) {
  return (
    <div className={classes.post}>
      <div className={classes.votes}>
        <img src={plus} alt="plus" onClick={() => addVote()} />
        <div className={classes.voteNum}>{voteValue}</div>
        <img src={minus} alt="minus" onClick={() => lessVote()} />
      </div>
      <div className={classes.bodyBox}>
        <div className={classes.top}>
          <div className={classes.leftSide}>
            <img src={userImage} alt="image" className={classes.image} />
            <h3 className={classes.user}>{userName}</h3>
            <h3 className={classes.period}>{userPeriod}</h3>
          </div>
          <div className={classes.rightSide} onClick={newReply}>
            <img src={repl} alt="reply" className={classes.reply} />
            <p className={classes.rep}>reply</p>
          </div>
        </div>
        <div className={classes.body}>
          <span className={classes.tag}>@{userReplied}</span>
          {userComment}
        </div>
      </div>
    </div>
  );
}

export default Reply;
