import { Route, Routes } from "react-router-dom";
import ReservationSki from "../pages/ReservationSki";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";
import Login from "../pages/Login";

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
      <Route path="/reservation" element={<ReservationSki posts={posts} setPosts={setPosts} />} />
      <Route path="/detail/:id" element={<Detail />}  posts={posts} setPosts={setPosts} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;
