const Video = require("../model/video.model");


const ITEMS_PER_PAGE = 10;


// GET API to return paginated video data sorted by published datetime
const getVideo = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * ITEMS_PER_PAGE;

    try {
        const totalVideos = Video.countDocuments();
        const videos = await Video.find({}).sort({ publishedAt: -1 }).skip(skip).limit(ITEMS_PER_PAGE)

        res.status(200).json({
            totalVideos,
            totaPages: Math.ceil(totalVideos / ITEMS_PER_PAGE),
            currentPage: page,
            videos
        });
    } catch (error) {
        console.error('Error fetching videos:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = { getVideo }