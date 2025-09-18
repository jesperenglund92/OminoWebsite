/* eslint-disable react/react-in-jsx-scope */
import { Box, Grid, AppBar, Toolbar, IconButton, SvgIcon, Typography, Link } from '@mui/material';
import Splash from "./features/Components/Splash";
import OminoIcon from "./assets/OminoIcon";
import { useNavigate } from 'react-router';

const ManualDownload = () => {
  return (
    <div id="pageContent" className='pageContent scroller'>
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
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "100px", mt: '65px',  width: '100%' }} id='my-body'>
        <Box sx={{ textAlign: "center", justifyContent: 'center', alignItems:'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Box sx={{ maxWidth: '700px', width: '75%', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: '200px' }}>
              <a href="https://apps.apple.com/se/app/polipod/id6479807292" target="_blank" >
                <img
                  src={'images/appStoreIcon.png'}
                  alt={'Apple App Store Download'}
                  loading='lazy'
                />
              </a>
            </Box>
            <Box sx={{ width: '190px' }}>
              <a href="https://play.google.com/store/apps/details?id=com.OminoGames.Polipod" target="_blank">
                <img
                  src={'images/GPlayIcon.png'}
                  alt={'Google Play Store Download'}
                  loading='lazy'
                />
              </a>
            </Box>
          </Box>
          <Typography sx={{ width: "70%", mb: '25px', mt: '50px', color: '#F9CC3D' }} variant="body2">
            Download Polipod from your appropriate store.
          </Typography>
          <Typography sx={{ width: "70%", mb: '25px', mt: '50px', color: '#F9CC3D' }} variant="body2">
            And feel free to join any of Omino Games' socials!
          </Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Splash />
        </Box>
      </Box>
    </div>
  );
}

export default ManualDownload;
