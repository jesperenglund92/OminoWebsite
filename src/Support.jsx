import { Box } from '@mui/material';
import Splash from "./features/Components/Splash";

const Support = () => {
  return (
    <Box sx={{color: 'white', p: '50px', width: "100%", height: "80dvh", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ textAlign: "center" }}>
        There are several ways to get in touch with Omino Games, whether it's in regard to getting support, providing feedback or any other enquiry. You are more than welcome to reach out on my socials below. You are also more than welcome to send an email to support@ominogames.com if you are feeling a bit old-school.
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Splash />
      </Box>
    </Box>
  );
}

export default Support;
