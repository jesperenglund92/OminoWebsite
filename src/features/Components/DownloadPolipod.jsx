import { getOS } from '../../Download';

const DownloadPolipod = () => {
    const handleClickDownload = () => {
        const os = getOS();
        if (os === 'Mac OS' || 'iOS'){
            window.open(
                'https://apps.apple.com/se/app/polipod/id6479807292',
                '_blank'
            );
        }
        else {
            window.open(
                'https://play.google.com/store/apps/details?id=com.OminoGames.Polipod',
                '_blank'
            );
        }
    };

    return (
        <div className='download-btn-container'>
            <button className="lg" onClick={handleClickDownload}>install polipod</button>
        </div>
    );
}

export default DownloadPolipod;
