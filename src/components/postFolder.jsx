import Post from "./post";
import ReplyBox from "./replyBox";

function PostFolder({
  replyPost,
  lessVot,
  addVot,
  voteValu,
  userImag,
  userNam,
  userPerio,
  userCommen,
  replyy,
  array,
  index,
  repply,
  postEdit,
  secondReply,
  deleteConfirmation,
  datas,
  replies,
  handleCloseBox,
  closeDel,
  delId,
  deleteConfirm,
}) {
  return (
    <>
      <Post
        voteValue={voteValu}
        userImage={userImag}
        userName={userNam}
        userPeriod={userPerio}
        userComment={userCommen}
        addVote={addVot}
        lessVote={lessVot}
        newReply={replyPost}
      />
      <ReplyBox
        imArr={array}
        repl={replyy}
        ind={index}
        replyArea={repply}
        editPost={postEdit}
        secondReply={secondReply}
        deleteConfirmation={deleteConfirmation}
        datas={datas}
        replies={replies}
        handleCloseBox={handleCloseBox}
        closeDel={closeDel}
        deleteConfirm={deleteConfirm}
        delId={delId}
      />
    </>
  );
}
export default PostFolder;
