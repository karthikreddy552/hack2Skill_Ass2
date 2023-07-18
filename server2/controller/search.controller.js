const Video = require("../model/video.model");

// Search API to search videos containing partial matches for the search query

const searchVideo = async (req, res) => {
    const query = req.query.q;

    try {
        const videos = await Video.find({
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Partial match in title
                { description: { $regex: query, $options: 'i' } }, // Partial match in description
            ]
        })

        res.status(200).json({ videos })
    } catch (error) {
        console.error('Error searching videos:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = searchVideo;