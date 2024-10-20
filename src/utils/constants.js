export const LOGO = "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/163314856?v=4";
export const NETFLIX_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/NG-en-20240916-TRIFECTA-perspective_67af3080-dbfa-4a8e-80e0-8ed53e5cc6ac_small.jpg";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"},
  {identifier:"igbo", name:"Igbo"},
  {identifier:"hausa", name:"Hausa"},
  {identifier:"yoruba", name:"Yoruba"},
]
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;