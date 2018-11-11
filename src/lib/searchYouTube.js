var searchYouTube = (options, successCB) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: { 
      'key': options.key,
      'q': options.query, 
      'maxResults': options.max || '5', 
      'videoEmbeddable': 'true', //makes it so we only get embeddable videos
      'type': 'video',
      'part': 'snippet'
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