import classes from "./replyModal.module.css";

function ReplyModal({ closeBox, delConf }) {
  return (
    <>
      <div className={classes.backdrop} onClick={closeBox} />
      <dialog open className={classes.modal}>
        <h1 className={classes.head}>Delete comment</h1>
        <p className={classes.sure}>
          Are you sure you want to delete this comment? this will remove the
          comment and can't be undone
        </p>
        <div className={classes.confirmation}>
          <p className={classes.cancel} onClick={closeBox}>
            no, cancel
          </p>
          <p className={classes.delete} onClick={delConf}>
            yes, delete
          </p>
        </div>
      </dialog>
    </>
  );
}

export default ReplyModal;
