import React, { useRef, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([
    {
      name: "Abu Hashmil",
      content: "Comment Content",
      date: 'Wed Oct 14 2020 12:20:11 GMT+0300 (Israel Daylight Time)'
    },
    {
      name: "Osamma",
      content: "Comment Content",
      date: 'Wed Oct 14 2020 12:20:11 GMT+0300 (Israel Daylight Time)'
    },
    {
      name: "DJ Jihad",
      content: "Comment Content",
      date: 'Wed Oct 14 2020 12:20:11 GMT+0300 (Israel Daylight Time)'
    },
    {
      name: "BIBI",
      content: "Comment Content",
      date: 'Wed Oct 14 2020 12:20:11 GMT+0300 (Israel Daylight Time)'
    },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputContent, setInputContent] = useState("");
  const contentRef = useRef();
  const nameRef = useRef();

  const handleSubmit = () => {
    if (inputContent === '' || inputName === '') {
        alert('Please fill out all fields')
        return
    }
    const newComment = {
      name: inputName,
      content: inputContent,
      date: new Date().toString()
    }
    console.log(newComment.date)
    setComments([newComment, ...comments]);
    nameRef.current.focus();
    setInputName("");
    setInputContent("");
  };

  const handleKeyUp = (e, nextRef) => {
      if (e.keyCode === 13) {
        if (nextRef === 'submit') {
            handleSubmit();
        } else {
            nextRef.current.focus();
        }
      }
  }

  return (
    <div>
      <div style={styles.form}>
        <input
          ref={nameRef}
          onKeyUp={e => handleKeyUp(e, contentRef)}
          onChange={(e) => setInputName(e.target.value)}
          style={styles.input}
          placeholder="Title"
          value={inputName}
          type="text"
        />
        <br />
        <textarea
          ref={contentRef}
          onKeyUp={e => handleKeyUp(e, 'submit')}
          onChange={(e) => setInputContent(e.target.value)}
          style={styles.input}
          placeholder="Title"
          value={inputContent}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {comments.map((comment) => (
        <div style={styles.wrapper} key={comment.name}>
          <h3>{comment.name}</h3>
          <p>{comment.content}</p>
          <p style={styles.date}>{comment.date}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    color: "black",
    backgroundColor: "lightGrey",
    padding: 10,
    margin: "20px auto",
    width: "80%",
  },
  form: {
    textAlign: "center",
    width: "50%",
    margin: "20px auto",
    padding: 30,
    backgroundColor: "#444",
  },
  input: {
    margin: 10,
  },
  date: {
    fontSize: 12,
    color: '#888'
  }
};

export default Comments;
