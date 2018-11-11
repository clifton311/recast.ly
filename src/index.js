// TODO: Render the `App` component to the DOM
console.log(window.exampleVideoData);
var videos = [];

var options = {
  key: window.YOUTUBE_API_KEY,
  query: 'john oliver',
  max: 5
};
window.searchYouTube(options, (data) => {
  videos = data;
  ReactDOM.render(<App videos={videos} search={window.searchYouTube}/>, document.getElementById('app'));
});

