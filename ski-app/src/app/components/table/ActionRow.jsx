import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import postService from "../../../setup/services/post.servise";


const ActionsRow = ({params, fetchPosts}) => {
    const handleDelete = async (e) => {
        e.stopPropagation()
       try{
              await postService.delete(params.id)
              fetchPosts()
       }
         catch(error){
                console.log(error);
             }
    }

    return ( 
        <Box display="flex" justifyContent="space-around">
            <Link to={`/shop/${params.row._id}`} style={{textDecoration: "none"}}>
                <Button variant="contained" color="primary" size="small">
                    Editer
                </Button>
            </Link>
            <Button variant="contained" color="secondary" size="small" sx={{ml: 2}} onClick={handleDelete}>
                Supprimer
            </Button>
        </Box>
     );
}
 
export default ActionsRow;