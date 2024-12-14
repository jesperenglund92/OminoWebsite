import { Box, Grid, AppBar, Toolbar, IconButton, SvgIcon, Typography, Link } from '@mui/material';
import Splash from "./features/Components/Splash";
import OminoIcon from "./assets/OminoIcon";
import { useNavigate } from 'react-router';

const WWF = () => {

  return (
    <Box sx={{ color: 'white' }}>
      <AppBar color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => window.location.href = ''}
          >
            <SvgIcon><OminoIcon fill="#F9CC3D" /></SvgIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WWF commitment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "100px", mt: '65px' }}>
        <Box sx={{ textAlign: "center", justifyContent: 'center', alignItems:'center', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ width: '40%', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: '200px' }}>
              <img
                src={'images/Biopod.png'}
                alt={'Biopod'}
                loading='lazy'
              />
            </Box>
            <Box sx={{ width: '200px' }}>
              <img
                src={'images/Bioplate.png'}
                alt={'Bioplate'}
                loading='lazy'
              />
            </Box>
          </Box>
          <Typography sx={{ width: "70%", mb: '25px' }} variant="body2">
            The Biopod and the Bioplate are both available for purchase in the Polipod in-game Item Shop and any income they generate will go directly to WWF.
          </Typography>
          <Typography sx={{ width: "70%"}}>
            Omino Games is committed to making the world a better place! In part by letting our players exercise their brains so that they can be at the top of their game,
            but also by donating part of the proceeds to the <Link href="https://www.wwf.org" target="_blank" rel="noreferrer">World Wildlife Fund</Link>.
            Exploring different worlds is what Polipods do. But humans and earthly animals are, for the time being, stuck on one and the same world.
            So to help protect that world and life in it, all of the proceeds from purchasing certain items in Polipod will be donated to WWF,
            whose mission is to conserve nature and reduce the most pressing threats to the diversity of life on earth.
            If and when some income is actually generated from these items, I will probably create a little counter on this page to display how much has been collected for WWF in total.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Splash />
        </Box>
        </Box>
    </Box>
  );
}

export default WWF;
