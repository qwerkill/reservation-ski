import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";

const CommentCreate = () => {
  const { id } = useParams();
  const [credantials, setCredantials] = useState({});
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = await e.target;
    setCredantials({ ...credantials, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createComment(credantials,id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action=""  onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
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
