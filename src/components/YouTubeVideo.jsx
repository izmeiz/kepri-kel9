import React, { useEffect, useState } from 'react';

const YouTubeVideo = ({ videoId }) => {
    const [videoEmbedUrl, setVideoEmbedUrl] = useState('');

    useEffect(() => {
        const API_KEY = 'AIzaSyD8Qqui62z0nPFprat3gJgXoW30MZOCEFU';
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setVideoEmbedUrl(`https://www.youtube.com/embed/${videoId}?autoplay=0`);
            })
            .catch(error => console.error('Error fetching video details:', error));
    }, [videoId]);

    return (
        <div className="video-box">
            <iframe width="560" height="315" src={videoEmbedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};

export default YouTubeVideo;
