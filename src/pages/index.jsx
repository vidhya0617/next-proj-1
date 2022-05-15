import React from "react";

import { FeedCard, LiveVideoCard, QuestionCard } from "next-lib-g3";

const description = `<div class="description"><p>Guess what's being prepared with love for your little ones at BabyChakra next ❤️</p><br>
<p>Do let us know in the comment section 👇</p><br>
 <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/CareComesFirst"><font color="#2b5998"><span>#</span></font><font color="#2b5998">CareComesFirst</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/childsafety"><font color="#2b5998"><span>#</span></font><font color="#2b5998">childsafety</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/babycareandhygiene"><font color="#2b5998"><span>#</span></font><font color="#2b5998">babycareandhygiene</font></a></b> </div>`;

const imgUrls = [
  "https://cdn-sp.babychakra.com/feedpost/original/feedpost_119627928e60027f.jpeg",
  "https://cdn-sp.babychakra.com/feedpost/original/175816/feedpost_22861c2b9ddb067b",
];

const commentsList = [
  {
    id: "comment_1",
    comment:
      "Kindly share your contact number or you can write us email on hello@babychakra.com",
    userImageUrl: `${process.env.NEXT_PUBLIC_CDN_LINK_SP}/users/original/2307489/profile_6268e768bd51c.jpeg`,
    userName: "Dr Pooja Marathe",
    userProfileLink: "https://www.babychakra.com/user/MjMwNzU4OA",
  },
  {
    id: "comment_2",
    comment:
      "Kindly share your contact number or you can write us email on hello@babychakra.com",
    userImageUrl: `${process.env.NEXT_PUBLIC_CDN_LINK_SP}/users/original/2307489/profile_6268e768bd51c.jpeg`,
    userName: "Dr Pooja Marathe",
    userProfileLink: "https://www.babychakra.com/user/MjMwNzU4OA",
  },
];
const Home = () => {
  return (
    <>
      <div className="w-[540px] ml-20 my-12">
        <LiveVideoCard />
      </div>
      {/* <div className="w-[540px] ml-20 my-12">
        <QuestionCard
          question="I want to return my parcel"
          postedUserName={"Anonymous"}
          userProfilePictureUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
          noOfViews={280}
          userImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
          commentsList={commentsList}
        />
      </div> */}
      {/* <div className="w-[540px] ml-20 my-12">
        <FeedCard
          authorName="Babychakra"
          authorImgUrl="https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg"
          authorProfileLink="https://www.babychakra.com/user/NjE2MTc"
          authorRole=""
          babyAge=""
          feedContent={description}
          imgUrls={imgUrls}
          cardType="image"
          likeCount={174}
          saveCount={56}
          shareCount={0}
          // videoEmbedId="19tLCuXupl8"
          // cardType="video"
          commentsList={commentsList}
        />
      </div> */}
    </>
  );
};

export default Home;
