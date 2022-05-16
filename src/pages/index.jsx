import React from "react";

import {
  FeedCard,
  LiveVideoCard,
  QuestionCard,
  ArticleCard,
  ChooseFeed,
  AnnouncementCard,
  RelatedQuestions,
} from "next-lib-g3";

const relatedQuestions = [
  {
    id: "question_1",
    question: `Is soya formula ( Isomil ) gud for infants (3-4 months )`,
  },
  {
    id: "question_2",
    question: `
    
    when to introduce teething toy??my baby is 4 month old months. He is drooling alot and eating his hand all the time. Are these signs of teething? Is anyone else
                          
  `,
  },
  {
    id: "question_3",
    question: `
    My son has a lot of throwing up tendency.  He is 3 now.  The paediatrician had said he has acid reflux.  But its been there for so long now. Does it have anything?
  `,
  },
  {
    id: "question_4",
    question: `
    Actually my son is a premature baby ,so what to do for his proper growth , He is not having food properly and after having food  either he will vomit or potty ,
  `,
  },
  {
    id: "question_5",
    question: `
    my son is 7 yrs 7 months bites his teeth in sleep only during nite ...hv given him de worming medicin also 10 days bk...but no use...wat needs to b done,
  `,
  },
];

const feedItem = [
  {
    name: "FOR YOU",
    defaultImgUrl:
      "https://cdn-sp.babychakra.com/users/normal/2344943/profile_61c326e2564e9.jpg",
  },
  {
    name: "COMMUNITY",
    defaultImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/community_disable.png",
    activeImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/community_enable.png",
  },
  {
    name: "QUESTIONS",
    defaultImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/question_disable.png",
    activeImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/question_enable.png",
  },
  {
    name: "LIVE VIDEOS",
    defaultImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/live_video_disable.png",
    activeImgUrl:
      "https://cdn-sp.babychakra.com/images/feedTypes/live_video_enable.png",
  },
];

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
const announcementsData = [
  {
    id: "bbc_news_1",
    imageUrl:
      "https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg",
    text: "Urvashi is blessed with baby Boy! ",
    btnText: "Send your Love!",
  },
  {
    id: "bbc_news_2",
    imageUrl:
      "https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg",
    text: "Today's opinion Poll is out.",
    btnText: "Participate now",
  },
  {
    id: "bbc_news_3",
    imageUrl:
      "https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg",
    text: "Coconut Oil, Baby Hair Oil, Baby Message Oil",
    btnText: "Shop Now",
  },
];
const Home = () => {
  return (
    <div className="p-6">
      <div className="md:w-[300px] my-4">
        <ChooseFeed feedItem={feedItem} />
      </div>
      <div className="md:w-[388px] my-4">
        <RelatedQuestions relatedQuestions={relatedQuestions} />
      </div>
      <div className="md:w-[540px] my-4">
        <AnnouncementCard announcementsData={announcementsData} />
      </div>
      <div className="md:w-[540px] my-4">
        <ArticleCard
          authorName="Dr Astha Nagpal"
          authorImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
          authorProfileLink="https://www.babychakra.com/user/MjU4MDc0NA"
          subtitle="Author (0 Articles)"
          articleCoverUrl="https://bbc-wp-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/10170607/Nayana-1.jpg"
          articleTitle="Pregnancy – A Mutual Commitment To Parenthood"
          minsToRead={2}
          noOfViews={3}
        />
      </div>
      <div className="md:w-[540px] my-4">
        <LiveVideoCard />
      </div>
      <div className="md:w-[540px]  my-4">
        <QuestionCard
          question="I want to return my parcel"
          postedUserName={"Anonymous"}
          userProfilePictureUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
          noOfViews={280}
          userImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
          commentsList={commentsList}
        />
      </div>
      <div className="md:w-[540px]  my-4">
        <FeedCard
          authorName="Babychakra"
          authorImgUrl="https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg"
          authorProfileLink="https://www.babychakra.com/user/NjE2MTc"
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
      </div>
    </div>
  );
};

export default Home;
