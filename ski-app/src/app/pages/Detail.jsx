import { useState } from "react";
import { Link } from "react-router-dom";

const Detail = ({posts,comments,bookings,setPosts,setBookings,setComments,fetchPosts,fetchBookigs,fetchComments}) => {
  const [credentials, setCredentials] = useState({});

  return (
    <div className="detail">
      <div className="detail_left">
        <Link to="/">
          <input type="button" value="Retour" />
        </Link>
        <input type="texte" name="userName" value="Votre pseudo" />
        <input type="texte" name="description" value="Votre commentaire" />
        <input type="button" value="Envoyer" />
      </div>
      <div className="detail__right">
        <div className="detail__right__top">
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <div className="image">
                    <img src={post.image
                    } alt="ski" />
                </div>
                <div className="text">
            <h2>{post.comments.stars}</h2>
            <h2>{post.title}</h2>
            <h3>{post.price}€/j - {post.size}</h3>
            <h3>{post.description}</h3>
            </div>
            </div>
            ))}
        </div>
        <div className="detail__right__bottom"></div>
      </div>
    </div>
  );
};

export default Detail;
