import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postService from "../../setup/services/post.servise";

const CommentCreate = () => {
  const [credantials, setCredantials] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredantials({ ...credantials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createComment(credantials);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userName">Nom</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <label htmlFor="stars">Stars</label>
        <select name="stars" id="stars" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
        <input type="button" value="Envoyer"/>
    </div>
  );
};

export default CommentCreate;
