import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";
import CommentCreate from "../components/CommentCreate";

const Detail = ({
  posts,
  setPosts,
  fetchPosts  
}) => {
  const [credantials, setCredantials] = useState({});
  const { id } = useParams();
  const [postID, setPostId] = useState({});
  const [comments, setComments] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetPosts();
    fetchComments();
    fetchBookigs();
  }, [id]);

  
  const fetPosts = async (e) => {
    try {
      const post = await postService.findOneById(id);
      setPostId(post);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchComments = async (e) => {
    try {
      const comments = await postService.findCommentsByPostId(id);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookigs = async (e) => {
    try {
      const bookings = await postService.findBookingsByPostId(id);
      setBookings(bookings);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCredantials({ ...credantials, [name]: value });
  };
  
  // au submit creer le booking et passe isAvable a false
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createBooking(credantials, id);
      await postService.update(id, { isAvailable: false });
      fetchBookigs();
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  
  const average = (comments) => {
    let sum = 0;
    for (let i = 0; i < comments.length; i++) {
      sum += comments[i].stars;
    }
   return sum / comments.length;
   };


  return (
    <div className="detail">
      <div className="detail_left">
        <Link to="/">
          <input type="button" value="Retour"/>
        </Link>
        <CommentCreate/>
        <div className="detail__left__bottom">
          <h2>Commentaires</h2>
          {comments.map((comment) => (
            <div className="detail__left__bottom__comment">
              <h3>{comment.userName}</h3>
              <p>{comment.description}</p>
              <p>Voici la note : {comment.stars}</p>
              </div>
          ))}
          </div>
      </div>
      <div className="detail__right">
        <div className="detail__top">
          <div className="detail__top__left">
            <img src={postID.image} alt="ski" />
            <h2>{postID.title}</h2>
            {average(comments) > 0 && (
              <p>La note moyenne est de {average(comments)}</p>
            )}
            <h3>
              {postID.price}€/j {postID.size}cm
            </h3>
            <p>{postID.description}</p>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="telephoneNumber"
                placeholder="Entrez votre numéro de Telephone"
                onChange={handleChange}
              />
              <input type="button" value="Réserver" />
            </form>
          </div>
        </div>
      </div>
      <div className="detail__right__bottom"></div>
    </div>
  );
};

export default Detail;
