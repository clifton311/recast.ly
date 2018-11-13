// TODO: Render the `App` component to the DOM
console.log(window.searchYouTube);
var videos = [{
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      },
      medium: {
        url: '',
        width: 320,
        height: 180
      },
      high: {
        url: '',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
}];

ReactDOM.render(<App videos={videos} searchYouTube={window.searchYouTube}/>, document.getElementById('app'));