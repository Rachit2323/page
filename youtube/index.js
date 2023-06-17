const axios = require('axios');

async function fetchYouTubeData() {
    let totalSubscriberCount;
    let channelPublishedYear;
    let viewCount;
    let commentCount;
    let likeCount;
  try {
    const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics,snippet',
        id: 't30LJ3DUKeE',
        key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
      },
    });

    const videoData = response.data.items[0];
    const channelId = videoData.snippet.channelId;
    const statistics = videoData.statistics;
    const snippet = videoData.snippet;

    // const subscriberCount = statistics.subscriberCount;
     likeCount = statistics.likeCount;
     viewCount = statistics.viewCount;
     commentCount = statistics.commentCount;
    const videoTitle = snippet.title;
    const videoLink = `https://www.youtube.com/watch?v=${videoData.id}`;

    console.log('Channel ID:', channelId);
    // console.log('Subscriber Count:', subscriberCount);
    console.log('Like Count:', likeCount);
    console.log('View Count:', viewCount);
    console.log('Comment Count:', commentCount);
    console.log('Video Title:', videoTitle);
    console.log('Video Link:', videoLink);

    // Nested API call to fetch the total subscriber count using the channel ID
    const channelResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'statistics,snippet',
        id: channelId,
        key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
      },
    });

    const channelData = channelResponse.data.items[0];
    console.log()
    totalSubscriberCount = channelData.statistics.subscriberCount;
    // const channelPublishedAt = channelData;
    const channelPublishedAt = channelData.snippet.publishedAt;
    channelPublishedYear = new Date(channelPublishedAt).getFullYear();

    // const channelPublishedAt = channelData.snippet.publishedAt;
    // console.log(channelPublishedAt);
    // const channelPublishedYear = new Date(channelPublishedAt).getFullYear();


    console.log('Total Subscriber Count:', totalSubscriberCount);
    console.log('Channel Published Year:', channelPublishedYear);
  } catch (error) {
    console.error('Error fetching YouTube data:', error.message);
  }

  console.log("data");
const activeSub =parseInt(totalSubscriberCount)*Math.pow(0.9,(2023 - parseInt(channelPublishedYear)));
console.log('active');


console.log(activeSub);
let checkData;
if (parseInt(activeSub) > parseInt(viewCount)) {
  checkData = parseInt(viewCount);
} else {
  checkData = parseInt(activeSub);
}
console.log('checkData');
console.log(checkData);

console.log('comment');
console.log(commentCount);

console.log('likes');
console.log(typeof(likeCount));

const visitorOnPage = parseInt(commentCount) + (0.5*parseInt(likeCount)) + (0.1*parseInt(checkData));
console.log('visitor');
console.log(visitorOnPage);
let amount = 10;
console.log('Through anchors, you can earn ->', parseInt(visitorOnPage) * parseInt(amount));

}

fetchYouTubeData();





























// const axios = require('axios');

// async function fetchYouTubeData() {
//   try {
//     const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
//       params: {
//         part: 'statistics,snippet',
//         id: 'Glmv0wj4xpo',
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const videoData = response.data.items[0];
//     const channelId = videoData.snippet.channelId;
//     const statistics = videoData.statistics;
//     const snippet = videoData.snippet;

//     const subscriberCount = statistics.subscriberCount;
//     const likeCount = statistics.likeCount;
//     const viewCount = statistics.viewCount;
//     const commentCount = statistics.commentCount;
//     const videoTitle = snippet.title;
//     const videoLink = `https://www.youtube.com/watch?v=${videoData.id}`;

//     console.log('Channel ID:', channelId);
//     console.log('Subscriber Count:', subscriberCount);
//     console.log('Like Count:', likeCount);
//     console.log('View Count:', viewCount);
//     console.log('Comment Count:', commentCount);
//     console.log('Video Title:', videoTitle);
//     console.log('Video Link:', videoLink);
  
//   } catch (error) {
//     console.error('Error fetching YouTube data:', error.message);
//   }
// }

// fetchYouTubeData();


















// const axios = require('axios');

// async function fetchChannelSubscriberCount(channelId) {
//   try {
//     const response = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//       params: {
//         part: 'statistics',
//         id: 'UC-CSyyi47VX1lD9zyeABW3w',
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const channelData = response.data.items[0];
//     const subscriberCount = channelData.statistics.subscriberCount;

//     console.log('Subscriber Count:', subscriberCount);
//   } catch (error) {
//     console.error('Error fetching channel data:', error.message);
//   }
// }

// // Provide the channel ID as an argument to the function
// fetchChannelSubscriberCount('YOUR_CHANNEL_ID');



// const axios = require('axios');

// async function fetchChannelData(channelId) {
//   try {
//     const channelResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//       params: {
//         part: 'statistics',
//         id: channelId,
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const channelData = channelResponse.data.items[0];
//     const subscriberCount = channelData.statistics.subscriberCount;

//     console.log('Subscriber Count:', subscriberCount);

//     const videosResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
//       params: {
//         part: 'statistics',
//         chart: 'mostPopular',
//         regionCode: 'IN',
//         maxResults: 10, // Adjust as per your requirements
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const videosData = videosResponse.data.items;
//     videosData.forEach((video) => {
//       const videoId = video.id;
//       const viewCount = video.statistics.viewCount;
//       const likeCount = video.statistics.likeCount;
//       const commentCount = video.statistics.commentCount;
//     //   const videoTitle = video.snippet.title;
//       const videoLink = `https://www.youtube.com/watch?v=${videoId}`;


//       console.log('Video ID:', videoId);
//     //   console.log('Video Title:', videoTitle);
//       console.log('Video Link:', videoLink);
//       console.log('View Count:', viewCount);
//       console.log('Like Count:', likeCount);
//       console.log('Comment Count:', commentCount);
//       console.log('-----------------');
//     });
//   } catch (error) {
//     console.error('Error fetching channel data:', error.message);
//   }
// }

// // Provide the channel ID as an argument to the function
// fetchChannelData('UC-CSyyi47VX1lD9zyeABW3w');


// const axios = require('axios');

// async function fetchChannelData(channelId) {
//   try {
//     const channelResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//       params: {
//         part: 'statistics',
//         id: channelId,
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const channelData = channelResponse.data.items[0];
//     const subscriberCount = channelData.statistics.subscriberCount;

//     console.log('Subscriber Count:', subscriberCount);
//   }
// }

  

// // Provide the channel ID as an argument to the function
// fetchChannelData('UC-CSyyi47VX1lD9zyeABW3w');



// const axios = require('axios');

// async function fetchChannelData(channelId) {
//   try {
//     const channelResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//       params: {
//         part: 'statistics',
//         id: channelId,
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const channelData = channelResponse.data.items[0];
//     const subscriberCount = channelData.statistics.subscriberCount;

//     console.log('Subscriber Count:', subscriberCount);
//   } catch (error) {
//     console.error('Error fetching channel data:', error.message);
//   }
// }

// // Provide the channel ID as an argument to the function
// fetchChannelData('UC-CSyyi47VX1lD9zyeABW3w').catch((error) => {
//   console.error('An error occurred:', error.message);
// });


// const axios = require('axios');

// async function fetchChannelData(channelId) {
//   try {
//     const channelResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//       params: {
//         part: 'statistics,snippet',
//         id: channelId,
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', // Replace with your actual API key
//       },
//     });

//     const channelData = channelResponse.data.items[0];
//     const subscriberCount = channelData.statistics.subscriberCount;
//     const channelPublishedAt = channelData.snippet.publishedAt;
//     const channelPublishedYear = new Date(channelPublishedAt).getFullYear();

//     console.log('Subscriber Count:', subscriberCount);
//     console.log('Published Year',channelPublishedYear)

//     const videosResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
//       params: {
//         part: 'snippet',
//         channelId: channelId,
//         maxResults: 100, 
//         key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', 
//       },
//     });

//    const videos = videosResponse.data.items;
//     console.log('Related Videos:');
//     let i=0;
//     for (const video of videos) {
//       const videoId = video.id.videoId;
//       const videoDataResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
//         params: {
//           part: 'statistics',
//           id: videoId,
//           key: 'AIzaSyB1vmx55mORpbUzVturm5X78n4MzOqhq3c', 
//         },
//       });

//       const videoData = videoDataResponse.data.items[0].statistics;
//       console.log(i);
//       console.log('Video Title:', video.snippet.title);
//       console.log('Likes:', videoData.likeCount);
//       console.log('Comment Count:', videoData.commentCount);
//       console.log('View Count:', videoData.viewCount);
//       console.log('------------------------');
//       i++;
//     }
//   } catch (error) {
//     console.error('Error fetching channel data:', error.message);
//   }
// }

// // Provide the channel ID as an argument to the function
// fetchChannelData('UCz4a7agVFr1TxU-mpAP8hkw').catch((error) => {
//   console.error('An error occurred:', error.message);
// });
//soch -> UCz4a7agVFr1TxU-mpAP8hkw
//dhruv-> UC-CSyyi47VX1lD9zyeABW3w


