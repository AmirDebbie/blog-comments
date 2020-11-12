import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => (props.primary ? "blue" : "white")};
  transition: 200ms;
  border: ${(props) => props.primary && "solid 2px blue"};

  :hover {
    transform: scale(1.3);
    color: #45fcad;
  }
`;

const MyTitle = styled(Title)`
  color: Tomato;
  font-size: 25px;
`;

const Wrapper = styled.div`
  text-align: center;
  color: white;
  background-color: #222;
  padding: 20px;
  margin: 20px;
`;

function Blog() {
  const [blog] = useState({
    title: "Awesome Blog",
    content:
      "It also includes entries from the former A2R (Alternatives to Religion) blog, a collaborative project between Conway Hall and Bishopsgate Institute which sparked exploration of some of the ways people have tried to make sense of the world and live together ethically without the need for faith in a God or gods. The key themes linking this broad movement are Freethought, Ethics, Humanism, Rationalism and Secularism. Material for these entries came from the British Humanist Association, The National Secular Society and Conway Hall Ethical Society. Posts were written by archivists, Nicky Hilton and Carl Harrison.",
  });
  console.log("render from Blog component");
  return (
    <div style={styles.wrapper}>
      <MyTitle>{blog.title}</MyTitle>
      <Title>{blog.title}</Title>
      <p>{blog.content}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#222",
    padding: 20,
    margin: 20,
  },
};

export default Blog;
