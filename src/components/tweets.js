import React, { useEffect } from "react";

const Tweets = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="Tweets">
      <div className="link2 fadeInUp" style={{animationDelay: '0.2s'}}>
      <h3>Latest Update From Government Officials</h3><br></br>
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="1"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/vijayanpinarayi"
        >
          Tweets by Pinarayi Vijayan
        </a>
      </div>
    <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="1"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/shailajateacher"
        >
          Tweets by K.K.Shailaja Teacher
        </a>
      </div>
    <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="1"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/narendramodi"
        >
          Tweets by Narendra Modi
        </a>
      </div>
    <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="1"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/MoHFW_INDIA"
        >
          Tweets by Ministry of Health
        </a>
      </div>
      </div>
    </div>
  );
};

 
export default Tweets;
