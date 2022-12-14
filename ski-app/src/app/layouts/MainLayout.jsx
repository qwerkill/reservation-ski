import { Box } from "@mui/system";

const MainLayout = ({children}) => {
    return ( 
        <Box>
            <Box sx={{
                mx: 5,
                mt: 2
            }}>
                {children}
            </Box>
        </Box>
     );
}
 
export default MainLayout;