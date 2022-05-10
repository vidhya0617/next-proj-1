import React from "react";

import { FeedCard1 } from "next-lib-g3";

const description = `<div class="description">If your kid age is less than 5 years make sure that you get polio drops<br><br>
Location Tamilnadu<br> <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/bbcreatorsclub"><font color="#2b5998"><span>#</span></font><font color="#2b5998">bbcreatorsclub</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/pregatips"><font color="#2b5998"><span>#</span></font><font color="#2b5998">pregatips</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/pregnancy"><font color="#2b5998"><span>#</span></font><font color="#2b5998">pregnancy</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/kids"><font color="#2b5998"><span>#</span></font><font color="#2b5998">kids</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/toddlers"><font color="#2b5998"><span>#</span></font><font color="#2b5998">toddlers</font></a></b> </div>`;

const Home = () => {
  return (
    <>
      <div className="w-[540px] ml-20 my-12">
        <FeedCard1
          authorName="Nivetha Muralidharan"
          authorProfileUrl="https://www.babychakra.com/user/MjMwNzU4OA"
          authorRole=""
          babyAge="2 years 1 month old baby"
          feedContent={description}
          imgUrl="https://cdn-sp.babychakra.com/feedpost/original/153039/feedpost_5535e23db5dcda4d.jpg"
          likeCount={174}
          saveCount={56}
          shareCount={0}
        />
      </div>
    </>
  );
};

export default Home;
