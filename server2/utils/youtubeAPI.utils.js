
const API_KEY = "AIzaSyB5m91VzA2_XqLCRUhMhoYWKnH8F_lg0oA";

const fetch_latest_video = async (query) => {
    // const publishedAfter = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(); // Fetch videos published in the last 1 day
    const publishedAfter = new Date(Date.now() - 60 * 60 * 1000).toISOString(); // Fetch videos published in the last 1 hour
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}&order=date&publishedAfter=${publishedAfter}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching videos from YouTube API:', error.message);
        throw error;
    }
}

module.exports = fetch_latest_video;