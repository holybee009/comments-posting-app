import "./App.css";
import Postlist from "./components/postList";
import PostInput from "./components/postInput";
import { useEffect, useState } from "react";
import { useRef } from "react";
import data from "./data.json";

function App() {
  const [timestamp, setTimeStamp] = useState(null);
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    updateTimeAgo();
  }, [timestamp]);
  const updateTimeAgo = () => {
    const currentTime = new Date();
    const previousTime = new Date(timestamp);
    const timeDifference = currentTime.getTime() - previousTime.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (seconds < 60) {
      setTimeAgo("just now");
    } else if (minutes < 60 && minutes > 0) {
      setTimeAgo(`${minutes} minute${minutes !== 1 ? "s" : ""} ago`);
    } else if (hours < 24 && hours > 0) {
      setTimeAgo(`${hours} hour${hours !== 1 ? "s" : ""} ago`);
    } else if (days < 7 && days > 0) {
      setTimeAgo(`${days} day${days !== 1 ? "s" : ""} ago`);
    } else if (weeks < 4 && weeks > 0) {
      setTimeAgo(`${weeks} week${weeks !== 1 ? "s" : ""} ago`);
    }
  };
  function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  const currentTime = getCurrentTime();

  const jsData = data.comments;

  const [newComment, setNewComment] = useState(jsData);
  const jsonData = newComment.map((comms) => {
    return comms;
  });
  function addRepliesHandler(postData) {
    arr === 1 &&
      setReplies((existingReplies) => [...existingReplies, postData]);
    arr !== 1 &&
      setSecReplies((existingReplies) => [...existingReplies, postData]);
  }
  function addCommentsHandler(commentData) {
    setNewComment((existingComments) => [...existingComments, commentData]);
  }
  const jsonRepliesCopy = jsonData.map((reps) => {
    return reps.replies;
  });
  const secReplies = jsonRepliesCopy[1].slice(1);
  const firstReply = jsonRepliesCopy[0];
  const [secondReply, setSecReplies] = useState(secReplies);
  const [replies, setReplies] = useState(firstReply);
  const [arr, setArr] = useState(null);
  const [closeDel, setCloseDel] = useState(false);
  const [delRec, setDelRec] = useState(null);
  const [delId, setDelId] = useState(null);
  const handleCloseBox = () => {
    setCloseDel(false);
  };
  const deleteConfirm = (id, n) => {
    setCloseDel(true);
    setDelRec(id);
    setDelId(n);
  };
  // const arrDeterminant = fieldName === 1 ? 0 : 1;

  const [newId, setNewId] = useState(5);
  const userData = data.comments.map((users) => {
    return users.user.username;
  });
  const jsonReplies = jsonData.map((reps) => {
    return reps.replies;
  });

  const valuess = [];
  jsonReplies.map((reppl) => {
    const innerArray = reppl;
    innerArray.forEach((rel) => {
      const replyingUsers = rel.user.username;
      valuess.push(replyingUsers);
    });
  });
  const fullData = [...userData, ...valuess];

  const [inputWord, setInputword] = useState("");
  const [userRes, setUserRes] = useState("");
  const [commInput, setCommInput] = useState("");
  const ref = useRef(null);
  // replies handing
  const boxReply = (fieldName) => {
    const ind = fieldName - 1;
    setUserRes("@" + fullData[ind] + " ");
    ref.current.focus();
    setArr(fieldName);
  };

  // typed value
  const valueInput = (e) => {
    setInputword(e.target.value);
    setTimeStamp(currentTime);
  };
  // sending data
  const handleSendData = () => {
    setNewId(newId + 1);
    const wordsArray = inputWord.split(" ");
    wordsArray.shift();
    const commentWord = wordsArray.join(" ");
    const postContent = () => {
      if (inputWord.includes(userRes)) {
        return commentWord;
      } else {
        return inputWord;
      }
    };
    // const currTime = new Date();

    if (inputWord.includes(userRes) && userRes !== "") {
      const postData = {
        id: newId,
        content: postContent(),
        score: 0,
        createdAt: timeAgo,
        replyingTo: userRes.slice(1, -1),
        user: data.currentUser,
      };
      addRepliesHandler(postData);
    } else if (userRes === "") {
      const commentData = {
        id: newId,
        content: inputWord,
        createdAt: timeAgo,
        score: 0,
        user: data.currentUser,
        replies: [],
      };
      addCommentsHandler(commentData);
    }
    setCommInput("");
  };
  // data sent
  const combinedValue = inputWord.includes(userRes)
    ? inputWord
    : userRes + "" + inputWord;
  useEffect(() => {
    setCommInput(combinedValue);
  }, [combinedValue]);
  const handleEditPost = (val, index) => {
    index === 0 &&
      replies.map((reps, i) => {
        val === i && setCommInput("@" + reps.replyingTo + " " + reps.content);
        ref.current.focus();
      });
    index === 1 &&
      secondReply.map((reps, i) => {
        val === i && setCommInput("@" + reps.replyingTo + " " + reps.content);
        ref.current.focus();
      });
  };
  const handleDelConf = (val, id) => {
    id === 0 &&
      setReplies(
        replies.filter((_, ind) => {
          return ind !== val;
        })
      );
    id === 1 &&
      setSecReplies(
        secondReply.filter((_, ind) => {
          return ind !== val;
        })
      );
    handleCloseBox();
  };
  return (
    <>
      <Postlist
        replying={boxReply}
        EditPost={handleEditPost}
        JSONData={newComment}
        secondReply={secondReply}
        replies={replies}
        delConfirmation={() => handleDelConf(delRec, delId)}
        Jdata={replies}
        handleCloseBox={handleCloseBox}
        closeDel={closeDel}
        deleteConfirm={deleteConfirm}
        delId={delId}
      />
      <PostInput
        textWords={valueInput}
        uRef={ref}
        tagValue={commInput}
        sendData={handleSendData}
      />
    </>
  );
}

export default App;
