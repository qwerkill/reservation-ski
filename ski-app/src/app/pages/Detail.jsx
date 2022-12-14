import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";

const Detail = ({
  posts,
  comments,
  bookings,
  setPosts,
  setBookings,
  setComments,
  fetchPosts,
  fetchBookigs,
  fetchComments,
}) => {
  const { id } = useParams();
  const [postID, setPostId] = useState({});
  const [credantials, setCredantials] = useState({});


  useEffect(() => {
    fetPosts();
  }, [id]);

  const fetPosts = async (e) => {
    try {
      const post = await postService.findOneById(id);
      setPostId(post);
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="detail">
      <div className="detail_left">
        <Link to="/">
          <input type="button" value="Retour" />
        </Link>
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
        
      </div>
      <div className="detail__right">
        <div className="detail__top">
          <div className="detail__top__left">
            <img src={postID.image} alt="ski" />
            <h2>{postID.title}</h2>
            <h3>{postID.price}€/j {postID.size}cm</h3> 
            <p>{postID.description}</p>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name="telephoneNumber" placeholder="Entrez votre numéro de Telephone"/>
              <input type="submtit"  value="Réserver"/>
            </form>      
            </div>     
        </div>
        </div>
        <div className="detail__right__bottom"></div>
      </div>
  );
};

export default Detail;
