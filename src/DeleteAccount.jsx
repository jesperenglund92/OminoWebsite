import { Box, Grid } from '@mui/material';
import Splash from "./features/Components/Splash";

const DeleteAccount = () => {
  const stepImages = ['images/DeleteStep1.png', 'images/DeleteStep2.png', 'images/DeleteStep3.png', 'images/DeleteStep4.png', 'images/DeleteStep5.png']
  return (
    <Box sx={{color: 'white', p: '50px', width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
      <Box sx={{ textAlign: "center" }}>
        If you want to delete your account in Polipod, the easiest way to do so is from the account section of the Polipod menu in the top right corner of the App. Press "delete account", authenticate by entering your password and then press "delete account" again. A couple of confirmation dialogues will follow. On the first one, select "yes, delete", on the second one, press "yes, begone!". All done!
      </Box>
      <Box sx={{ flexDirection: 'row', display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Grid container columnSpacing={2} rowSpacing={2} sx={{ justifyContent: 'center'}}>
          {
            stepImages.map((image) => (
              <Grid sx={{ height: '300px', padding: 1 }}>
                <img src={image} alt="some step" key={image} style={{ height: "100%" }} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        Please note that design and/or copy might change slightly and it might take a while before this page is updated but the process should stay basically the same.
      </Box>
      <Box sx={{ textAlign: "center" }}>
        Alternatively, you can send me an email via support@ominogames.com or contact me through any of the socials below, and we'll do it the old fashioned way, manually. But I'd appreciate if you try do take care of it yourself first!
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Splash />
      </Box>
    </Box>
  );
}

export default DeleteAccount;
