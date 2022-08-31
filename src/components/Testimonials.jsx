import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Tweetdata from "./Tweetdata.json";
function Testimonials() {
  return (
    <div className="text-4xl text-barlow text-primary bg-primary text-center py-8 ">
      Testimonils
      <section className="bg-primary py-4 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 tweet">
        <TwitterTweetEmbed tweetId={"1466307297538240518"} />
        <TwitterTweetEmbed tweetId={"1466935776180985859"} />
        <TwitterTweetEmbed tweetId={"1480888740876734470"} />
        <TwitterTweetEmbed tweetId={"1519383444651790336"} />
      </section>
    </div>
  );
}

export default Testimonials;
