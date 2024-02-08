import PostFolder from "./postFolder";
import { useState } from "react";

function Postlist({
  replying,
  EditPost,
  JSONData,
  secondReply,
  delConfirmation,
  Jdata,
  handleCloseBox,
  replies,
  closeDel,
  deleteConfirm,
  delId,
}) {
  const comScores = JSONData.map((scores) => {
    return scores.score;
  });
  const [scoreValue, setScoreValue] = useState(comScores);

  const [clickable, setClickable] = useState(false);

  const clickableIcon = (val) => {
    setClickable(val);
  };

  const handleVoteIncrease = (fieldName) => {
    const arrPosition = fieldName - 1;
    const newArray = [...scoreValue];
    newArray[arrPosition] += 1;
    !clickable && setScoreValue(newArray);
    clickableIcon(true);
  };
  const handleVotedecrease = (fieldName) => {
    const arrPosition = fieldName - 1;
    const newArray = [...scoreValue];
    newArray[arrPosition] -= 1;
    clickable && setScoreValue(newArray);
    clickableIcon(false);
  };
  return (
    <>
      {JSONData.map((postSection, i) => (
        <PostFolder
          key={postSection.id}
          voteValu={scoreValue[i]}
          userImag={postSection.user.image.png}
          userNam={postSection.user.username}
          userPerio={postSection.createdAt}
          userCommen={postSection.content}
          replyy={postSection.replies}
          addVot={() => handleVoteIncrease(postSection.id)}
          lessVot={() => handleVotedecrease(postSection.id)}
          datas={JSONData}
          array={Jdata}
          index={i}
          replyPost={() => replying(postSection.id)}
          repply={replying}
          postEdit={EditPost}
          secondReply={secondReply}
          replies={replies}
          deleteConfirmation={delConfirmation}
          handleCloseBox={handleCloseBox}
          closeDel={closeDel}
          deleteConfirm={deleteConfirm}
          delId={delId}
        />
      ))}
    </>
  );
}

export default Postlist;
