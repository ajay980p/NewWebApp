
function SetNewsAPI(props) {

  var url;

  url = 'https://newsapi.org/v2/everything?q=sports&apiKey=2b199577ba7d4962badd41f4e53e2f46';

  props.setNewsData(url);

  return ('');

}

export default SetNewsAPI