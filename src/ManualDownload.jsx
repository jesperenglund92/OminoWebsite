/* eslint-disable react/react-in-jsx-scope */
import { Box, AppBar, Toolbar, IconButton, SvgIcon, Typography } from '@mui/material';
import Splash from "./features/Components/Splash";
import OminoIcon from "./assets/OminoIcon";
import DownloadPolipod from './features/Components/DownloadPolipod';

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
        <DownloadPolipod />
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", textAlign: 'center', alignItems: 'center', gap: "60px" }}>
          <Typography sx={{ width: "70%", mb: '25px', mt: '50px', color: '#F9CC3D' }} variant="body2">
            And feel free to join any of Omino Games' socials!
          </Typography>
          <Splash />
        </Box>
      </Box>
    </div>
  );
}

export default ManualDownload;
