import  { redirect } from 'react-router-dom';

const getOS = () => {
  const userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

const Download = () => {
  const os = getOS();
  if (os === 'Mac OS' || 'iOS'){
    window.location.href = 'https://apps.apple.com/se/app/polipod/id6479807292';
    return null;
  }
  window.location.href = 'https://play.google.com/store/apps/details?id=com.OminoGames.Polipod&hl=en';
  return null;
}

export default Download;
