import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";
import CommentCreate from "../components/CommentCreate";

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

  return (
    <div className="detail">
      <div className="detail_left">
        <Link to="/">
          <input type="button" value="Retour"/>
        </Link>
        <CommentCreate/>
      </div>
      <div className="detail__right">
        <div className="detail__top">
          <div className="detail__top__left">
            <img src={postID.image} alt="ski" />
            <h2>{postID.title}</h2>
            <h3>
              {postID.price}€/j {postID.size}cm
            </h3>
            <p>{postID.description}</p>
            <form action="">
              <input
                type="text"
                name="telephoneNumber"
                placeholder="Entrez votre numéro de Telephone"
              />
              <input type="submtit" value="Réserver" />
            </form>
          </div>
        </div>
      </div>
      <div className="detail__right__bottom"></div>
    </div>
  );
};

export default Detail;
