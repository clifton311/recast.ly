var searchYouTube = (options, successCB) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: "https://www.googleapis.com/youtube/v3/search",
    data: { 
      "q": options.query, 
      "maxResults": options.max || '5', 
      "videoEmbeddable": 'true', 
      "type": 'video',
      "part": 'snippet',
      "key": options.key
    },
    success: function(data) {
      successCB(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;

// data: { 
//   "q": options.query, 
//   "maxResults": options.max, 
//   "type": 'video', 
//   "key": options.key
// },