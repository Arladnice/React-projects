import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JS",
      body: "JS - язык программирования",
    },
    {
      id: 2,
      title: "Python",
      body: "Python - язык программирования",
    },
    {
      id: 3,
      title: "HTML",
      body: "HTML - не язык программирования",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id != post.id));
  };
  return (
    <div>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <MySelect
          defaultSelect="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
