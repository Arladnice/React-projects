import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__button">
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;