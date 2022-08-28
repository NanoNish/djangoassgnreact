import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Feed from '../../components/feed/feed';

export default function Home() {
    
    var posts = [];
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // axios.get("http://localhost:8000/api/post")
        //     .then((response) => {
        //         posts = response.data.body.results;
        //         setIsLoaded(true);
        //     })
        
        posts = [
            {
                "url": "http://localhost:8000/api/post/1/",
                "author": "http://localhost:8000/api/user/1/",
                "title": "Title1",
                "text": "Text1",
                "created_date": "2022-08-25T07:37:38.576474Z"
            },
            {
                "url": "http://localhost:8000/api/post/2/",
                "author": "http://localhost:8000/api/user/1/",
                "title": "Title2",
                "text": "Text2",
                "created_date": "2022-08-25T07:37:52.489263Z"
            },
            {
                "url": "http://localhost:8000/api/post/3/",
                "author": "http://localhost:8000/api/user/2/",
                "title": "Title3",
                "text": "Text3",
                "created_date": "2022-08-25T07:39:16.278568Z"
            }
        ];
        setIsLoaded(true);
    });

    const renderFeed = (
        <Feed posts={posts} />
    )

    const renderError = (
        <p>Error Semd</p>
    )
    return (
        <div className='home'>
            <div className="title">Home</div>
            {isLoaded ? renderFeed : renderError}
        </div>
    )
}