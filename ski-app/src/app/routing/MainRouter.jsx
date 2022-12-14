import { Route, Routes } from "react-router-dom";
import ReservationSki from "../pages/ReservationSki";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";

const MainRouter = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchComments();
    fetchBookings();
  }, []);

  const fetchPosts = async () => {
    fetch("http://localhost:8000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  const fetchComments = async () => {
    fetch("http://localhost:8000/api/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

    const fetchBookings = async () => {
    fetch("http://localhost:8000/api/bookings")
        .then((response) => response.json())
        .then((data) => setBookings(data));
    };


  return (
    <Routes>
      <Route path="/" element={<ReservationSki posts={posts} setPosts={setPosts} />} />
      <Route path="/detail" element={<Detail />} comments={comments}  setComments={setComments}  posts={posts} setPosts={setPosts} bookings={bookings} setBookings={setBookings} />
    </Routes>
  );
};

export default MainRouter;
