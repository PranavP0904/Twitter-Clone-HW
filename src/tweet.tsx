// Tweet.js
import React, { useState } from 'react';
/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

type TweetProps = {
    name: string;
    username: string;
    content: string;
    likes: number;
    timestamp: string;
};

const Tweet: React.FC<TweetProps> = ({ name, username, content, likes, timestamp }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
  
    const toggleLike = () => {
      if (liked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLiked(!liked);
    };
  
    return (
      <div className="tweet">
        <div className="tweet-header">
          <strong>@{username}</strong> <span className="timestamp">· {timestamp}</span>
        </div>
        <div className="tweet-content">
          <p>{content}</p>
        </div>
        <div className="tweet-footer">
          <button onClick={toggleLike}>
            {liked ? '💙 Unlike' : '🤍 Like'} ({likeCount})
          </button>
        </div>
      </div>
    );
  };
  

export default Tweet;
