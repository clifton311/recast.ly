var getYouTubeVideoDetails = (options, successCB) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {
      'key': options.key,
      'id': options.videoID,
      'part': 'snippet,contentDetails, statistics'
    },
    success: function(data) {
      successCB(data.items[0]);
    }
  });
};

window.getYouTubeVideoDetails = getYouTubeVideoDetails;

// data: {
//   "q": options.query,

//   "maxResults": options.max,
//   "type": 'video',
//   "key": options.key
// },