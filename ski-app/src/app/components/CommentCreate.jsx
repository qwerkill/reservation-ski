import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";

const CommentCreate = () => {
  const { id } = useParams();
  const [credantials, setCredantials] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCredantials({ ...credantials, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createComment(credantials,id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
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
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ mt: 2 }}
        type="submit"
      >
        Enregistrer
      </Button>
    </div>
  );
};

export default CommentCreate;
