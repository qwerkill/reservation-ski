import { Route, Routes } from "react-router-dom";
import ReservationSki from "../pages/ReservationSki";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";

const MainRouter = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    
  }, []);

  const fetchPosts = async () => {
    fetch("http://localhost:8000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };




  return (
    <Routes>
      <Route path="/" element={<ReservationSki posts={posts} setPosts={setPosts} />} />
      <Route path="/detail/:id" element={<Detail />}  posts={posts} setPosts={setPosts} />
    </Routes>
  );
};

export default MainRouter;
