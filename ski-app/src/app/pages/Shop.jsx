import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ActionsRow from "../components/table/ActionRow";

const Shop = ({posts,fetchPosts}) => {
    return ( 
        <div className="main"> 
        <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography variant="h2">Liste des Posts</Typography>
                <Link to="/shop/create" style={{textDecoration: "none"}}>
                    <Button variant="contained">Nouveau Post</Button>
                </Link>
            </Box>
        {posts.map((post) => (
         <div className="post" key={post.id}> 
            <div className="image">
              <img src={post.image} alt="ski" />
            </div>
            <div className="text">
              <h2>{post.title}</h2>
              <h3>C'est des ski de style: {post.style}</h3>
              <h3>{post.weight} kilo</h3>
              <h3>Ils font {post.size}cm</h3>
              <h3>{post.price}€</h3>
              <h3>Voici leur description:  {post.description}</h3>
            </div>
            <ActionsRow params={{row: post}} fetchInvoices={fetchPosts}/>
          </div>      
        ))}
      </div>
     );
}
 
export default Shop;