import classes from "./replyBox.module.css";
import UserReply from "./userReply";
import { useEffect, useState } from "react";
import ReplyModal from "./replyModal";
import Reply from "./replyyy";

function ReplyBox({
  repl,
  datas,
  imArr,
  ind,
  replyArea,
  editPost,
  secondReply,
  deleteConfirmation,
  replies,
  handleCloseBox,
  closeDel,
  delId,
  deleteConfirm,
}) {
  let replySect = repl.map((rep) => {
    return rep?.score;
  });
  let replySectio = replies.map((rep) => {
    return rep?.score;
  });
  let replySection = secondReply.map((rep) => {
    return rep?.score;
  });

  const [firstScoreValue, setFirstScoreValue] = useState(replySectio);
  const [secondScoreValue, setSecondScoreValue] = useState(replySection);
  const [scoreValue, setScoreValue] = useState(replySect);
  const [clickable, setClickable] = useState(false);

  useEffect(() => {
    setFirstScoreValue(replySectio);
  }, [firstScoreValue.length === replySectio.length]);

  const clickableIcon = (val) => {
    setClickable(val);
  };
  useEffect(() => {
    setSecondScoreValue(replySection);
  }, [secondScoreValue.length === replySection.length]);

  const handleVoteIncrea = (fieldName) => {
    const newArray = [...secondScoreValue];
    newArray[fieldName] += 1;
    !clickable && setSecondScoreValue(newArray);
    clickableIcon(true);
  };
  const handleVotedecrea = (fieldName) => {
    const newArray = [...secondScoreValue];
    newArray[fieldName] -= 1;
    clickable && setSecondScoreValue(newArray);
    clickableIcon(false);
  };

  const handleVoteIncreas = (fieldName) => {
    // const arrPosition = fieldName - 3;
    const newArray = [...firstScoreValue];
    newArray[fieldName] += 1;
    !clickable && setFirstScoreValue(newArray);
    clickableIcon(true);
  };
  const handleVotedecreas = (fieldName) => {
    // const arrPosition = fieldName - 3;
    const newArray = [...firstScoreValue];
    newArray[fieldName] -= 1;
    clickable && setFirstScoreValue(newArray);
    clickableIcon(false);
  };
  const handleVoteIncrease = (fieldName) => {
    const arrPosition = fieldName - 3;
    const newArray = [...scoreValue];
    newArray[arrPosition] += 1;
    !clickable && setScoreValue(newArray);
    clickableIcon(true);
  };
  const handleVotedecrease = (fieldName) => {
    const arrPosition = fieldName - 3;
    const newArray = [...scoreValue];
    newArray[arrPosition] -= 1;
    clickable && setScoreValue(newArray);
    clickableIcon(false);
  };

  return (
    <>
      {closeDel && ind === delId && (
        <ReplyModal closeBox={handleCloseBox} delConf={deleteConfirmation} />
      )}
      {ind === 0 &&
        imArr.length !== 0 &&
        imArr.map((firstRep, i) => {
          return (
            <main className={classes.replyBox}>
              <UserReply
                key={firstRep.id}
                userReplied={firstRep.replyingTo}
                lessVote={() => handleVotedecreas(i)}
                addVote={() => handleVoteIncreas(i)}
                voteValue={firstScoreValue[i]}
                userImage={firstRep.user.image.png}
                userName={firstRep.user.username}
                userPeriod={firstRep.createdAt}
                userComment={firstRep.content}
                deletePost={() => deleteConfirm(i, 0)}
                editPost={() => editPost(i, 0)}
              />
            </main>
          );
        })}
      {ind === 1 && (
        <main className={classes.replyBox}>
          <Reply
            key={datas[1].replies[0].id}
            newReply={() => replyArea(datas[1].replies[0].id)}
            userReplied={datas[1].replies[0].replyingTo}
            lessVote={() => handleVotedecrease(datas[1].replies[0].id)}
            addVote={() => handleVoteIncrease(datas[1].replies[0].id)}
            voteValue={scoreValue[0]}
            userImage={datas[1].replies[0].user.image.png}
            userName={datas[1].replies[0].user.username}
            userPeriod={datas[1].replies[0].createdAt}
            userComment={datas[1].replies[0].content}
          />
          {secondReply.map((vals, i) => {
            return (
              <UserReply
                key={vals.id}
                userReplied={vals.replyingTo}
                lessVote={() => handleVotedecrea(i)}
                addVote={() => handleVoteIncrea(i)}
                voteValue={secondScoreValue[i]}
                userImage={vals.user.image.png}
                userName={vals.user.username}
                userPeriod={vals.createdAt}
                userComment={vals.content}
                deletePost={() => deleteConfirm(i, 1)}
                editPost={() => editPost(i, 1)}
              />
            );
          })}
        </main>
      )}
    </>
  );
}

export default ReplyBox;
