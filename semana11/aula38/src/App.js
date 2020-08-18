import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(false)

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    if(inputValue !== ''){
      // Adiciona um post à lista
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      setInputValue('')
      setEmptyInput(false)
    }else{
      setEmptyInput(true)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

const isEmpty = emptyInput ? <h1>Necessário texto para o post</h1> : <></>

const gotPosts = postsList.length === 0 ? <h1>Nenhum post</h1> : <div>Quantidade de posts: {postsList.length}</div> 

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {gotPosts}
      {isEmpty}
      <br />
      {postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default App;
