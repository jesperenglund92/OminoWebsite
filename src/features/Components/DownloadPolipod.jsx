import { Box, Typography } from '@mui/material';

const DownloadPolipod = () => {
    return (
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
            <Typography sx={{ width: "70%", mb: '25px', mt: '50px', color: '#F9CC3D', textAlign: 'center !important' }} variant="body2">
                Download Polipod from your appropriate store.
            </Typography>
        </Box>
    );
}

export default DownloadPolipod;
