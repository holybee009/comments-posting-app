import classes from "./userReply.module.css";
import minus from "./../../images/icon-minus.svg";
import plus from "./../../images/icon-plus.svg";
import del from "./../../images/icon-delete.svg";
import edit from "./../../images/icon-edit.svg";

function UserReply({
  addVote,
  lessVote,
  voteValue,
  userImage,
  userName,
  userPeriod,
  userComment,
  userReplied,
  editPost,
  deletePost,
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
            <span className={classes.you}>you</span>
            <h3 className={classes.period}>{userPeriod}</h3>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.delete} onClick={() => deletePost()}>
              <img src={del} alt="delete" />
              <span>delete</span>
            </div>
            <div className={classes.edit} onClick={() => editPost()}>
              <img src={edit} alt="edit" />
              <span>edit</span>
            </div>
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

export default UserReply;
