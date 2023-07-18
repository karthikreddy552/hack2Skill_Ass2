# YouTube API Server

This project implements an API server to fetch the latest YouTube videos for a given tag/search query and store them in a MongoDB database. It also provides endpoints to retrieve the stored videos in a paginated response and search for videos based on title and description.

## Table of Contents

- [YouTube API Server](#youtube-api-server)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Usage](#usage)
    - [Running the Server](#running-the-server)
    - [API Endpoints](#api-endpoints)
  - [Conclusion](#conclusion)

## Requirements

To run this project, you need the following dependencies:

- Node.js (v14 or higher)
- MongoDB (running on localhost or accessible URL)
- YouTube Data API v3 Key

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/youtube-api-server.git
   cd youtube-api-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory with the following content:

   ```bash
   PORT = 8080
   MONGODB_URI = Your MongoDB URL
   YOUTUBE_API_KEYS = YOUR_YOUTUBE_API_KEY
   ```

## Usage

### Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running on port 8080 by default. You can access it at <http://localhost:8080>.

### API Endpoints

- #### Fetch Latest Videos

        Endpoint: GET api/videos

        Description: Fetches the latest videos stored in the database in reverse chronological order of their publishing date-time.
        The response is paginated.

        Query Parameters:

        page: (Optional) The page number for pagination. Default is 1

- #### Search Videos

        Endpoint: GET api/search

        Description: Searches the stored videos using their title and description for partial matches.

        Query Parameters:

        q: The search query.

        http://localhost:8080/search?q=cricket

## Conclusion

Please make sure to replace the placeholders (e.g., `YOUR_YOUTUBE_API_KEY`, `your-username`, etc.) with actual values specific to your project. Additionally, customize the sections according to your project's structure and requirements.

In this `README.md` file, we provide details about the project, its requirements, setup instructions, usage guide, API endpoints, contributing guidelines, and license information. A well-maintained `README.md` file helps users and contributors understand the project better and get started quickly.
