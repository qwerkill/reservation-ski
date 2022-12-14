import { useState } from "react";
import postService from "../../setup/services/post.servise";

const CommentCreate = () => {
    const [credantials, setCredantials] = useState({});
    
 const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(credantials);
    setCredantials({
        ...credantials,
        [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await  postService.create(credantials)
  } catch(error){
      console.log(error);
  }
  }
    return (
        <div>
  <form action=""onSubmit={handleSubmit}>
  <input type="text" name="userName" placeholder="Votre pseudo" onChange={handleChange}/>
  <input type="text" name="description" placeholder="Votre commentaire" onChange={handleChange}/>
  <select name="stars" onChange={handleChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  <input type="button" value="Envoyer" /> 
  </form>
  </div>
    );
};
 
export default CommentCreate;