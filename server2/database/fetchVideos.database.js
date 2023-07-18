const Video = require("../model/video.model");
const fetch_latest_video = require("../utils/youtubeAPI.utils");


const TAG = "cricket";
const INTERVAL = 10000;


const fetchVideo_storeVideo = async () => {
    try {
        const videos = await fetch_latest_video(TAG);
        // console.log(videos);
        if (videos.length > 0) {
            const videoData = videos.map((video) => ({
                title: video.snippet.title,
                description: video.snippet.description,
                publishedAt: new Date(video.snippet.publishedAt),
                thumbnailUrls: Object.values(video.snippet.thumbnails).map((thumbnail) => thumbnail.url)
            }))
            await Video.insertMany(videoData);
            console.log(`Fetched and stored ${videos.length} videos.`);
        }
    } catch (error) {
        console.error('Error fetching and storing videos:', error.message);
    } finally {
        setTimeout(fetchVideo_storeVideo, INTERVAL);
    }
}

fetchVideo_storeVideo()

module.exports = fetchVideo_storeVideo;