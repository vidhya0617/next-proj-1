import React from "react";

import {
  FeedCard,
  LiveVideoCard,
  QuestionCard,
  ArticleCard,
  ChooseFeedDesktopTab,
  ChooseFeedMobileTab,
  AnnouncementCard,
  RelatedQuestions,
  getIsSSRMobileView,
  JourneyCard,
  RecommendedArticle,
  DailyTipAccordian,
  DownloadAppContent,
} from "next-lib-g3";

const tipSubtitle = "4 months old baby";
const startTipImgUrl =
  "https://cdn-sp.babychakra.com/metric_images/original/daily_section/timeline_start_new_parent.png";
const endTipImgUrl =
  "https://cdn-sp.babychakra.com/metric_images/original/daily_section/timeline_end_new_parent.png";
const selectedScaleUnit = "18";
const scale = 38;

const tipsData = [
  {
    id: "tip_1",
    cardType: "daily_card",
    tipImage:
      "https://cdn-sp.babychakra.com/metric_images/original/1290/metric_623058d289757.png",
    title: "TIP FOR YOU TODAY",
    content: `Your baby should be here anytime! Did you know that your baby is
    expected to weight between 2.5 to 3.5 kg at birth and will be probably
    about 20 inch`,
  },
  {
    id: "tip_2",
    cardType: "development_card",
    tipImage:
      "https://cdn-sp.babychakra.com/metric_images/original/8349/metric_5db28196eb0d5.jpg",
    title: "Fetal Development: Week 38",
    content: `Baby can stretch out arms and legs`,
  },
  {
    id: "tip_3",
    cardType: "daily_card",
    tipImage:
      "https://cdn-sp.babychakra.com/metric_images/original/pregnancy_tracker_activities.png",
    title: "Pregnancy Tracker: Activity",
    content: `It's time to switch your reading priorities from pregnancy to baby now. You won't have the time to read as much once the baby comes in so`,
  },
  {
    id: "tip_4",
    cardType: "daily_card",
    tipImage:
      "https://cdn-sp.babychakra.com/metric_images/original/6935/metric_5b48872519cd4.jpg",
    title: "Trimester 2: Cervical Length Scan",
    content: `Cervical Length Scan - "Scan recommended from 16-20 weeks This scan is performed for moms with high risk factors. Your cervix connects your womb with your`,
  },
];

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
const liveVideosData = [
  {
    id: "video_1",
    videoThumbnailUrl: "https://img.youtube.com/vi/a8DGwq43KC0/sddefault.jpg",
    videoTitle: "Mothers For Mother Earth",
    noOfViews: "95.7K",
  },
  {
    id: "video_2",
    videoThumbnailUrl: "https://img.youtube.com/vi/AZ54cRhVQh8/sddefault.jpg",
    videoTitle: `You'll be surprised the number of times women and mothers are asked to "settle down" and compromise`,
    noOfViews: "95.6K",
  },
  {
    id: "video_3",
    videoThumbnailUrl: "https://img.youtube.com/vi/SDAyBYtawtM/sddefault.jpg",
    videoTitle: `5 Reasons Why BabyChakra's Home & Pure Range is the Best and Safest addition for your family's hy`,
    noOfViews: "171.2K",
  },
  {
    id: "video_4",
    videoThumbnailUrl: "https://img.youtube.com/vi/RtMPB-_1khw/sddefault.jpg",
    videoTitle: `Know more about our BESTSELLER - Mom and Baby Safety Kit
    #safetykit  #bestseller  #perfectgift  #hand`,
    noOfViews: "148.7K",
  },
  {
    id: "video_5",
    videoThumbnailUrl: "https://img.youtube.com/vi/FHxFuk6rDTA/sddefault.jpg",
    videoTitle: `"We don't want you to compromise on your child's health &amp; immunity",Do you still use unsafe, harsh `,
    noOfViews: "148.7K",
  },
];
const journeyList = [
  {
    id: "new_parents",
    heading: "New Parents",
    subheading: "I am outside with you",
    imgUrl: "https://cdn-df.babychakra.com/lifestage/4.svg",
  },
  {
    id: "toddlers",
    heading: "Toddlers",
    subheading: "Mom i am crawling",
    imgUrl: "https://cdn-df.babychakra.com/lifestage/5.svg",
  },
  {
    id: "pregnant",
    heading: "Pregnant",
    subheading: "I am still in your womb",
    imgUrl: "https://cdn-df.babychakra.com/lifestage/6.svg",
  },
];
const Home = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <ChooseFeedMobileTab feedItem={feedItem} onClickFeed={() => {}} />
      ) : null}
      <div className="p-20">
        <div className="grid gap-5 items-start home-page-wrapper">
          {!isMobile ? (
            <ChooseFeedDesktopTab feedItem={feedItem} onClickFeed={() => {}} />
          ) : null}
          <div>
            <div className="grid grid-cols-2 gap-x-2.5 ">
              <div>
                <RecommendedArticle
                  wrapperClassName="mb-3"
                  authorName="Dr Astha Nagpal"
                  authorImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
                  authorProfileLink="https://www.babychakra.com/user/MjU4MDc0NA"
                  subheadings={{
                    postedOn: "3 months ago",
                    noOfMinRead: 4,
                  }}
                  articleCoverUrl="https://bbc-wp-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/10170607/Nayana-1.jpg"
                  articleTitle="Pregnancy – A Mutual Commitment To Parenthood"
                  noOfViews={3}
                />
              </div>
              <div>
                <RecommendedArticle
                  wrapperClassName="mb-3"
                  authorName="Dr Astha Nagpal"
                  authorImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
                  authorProfileLink="https://www.babychakra.com/user/MjU4MDc0NA"
                  subheadings={{
                    postedOn: "3 months ago",
                    noOfMinRead: 4,
                  }}
                  articleCoverUrl="https://bbc-wp-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/10170607/Nayana-1.jpg"
                  articleTitle="Pregnancy – A Mutual Commitment To Parenthood"
                  noOfViews={3}
                />
              </div>
            </div>
            <FeedCard
              wrapperClassName="mb-3"
              authorName="Babychakra"
              authorImgUrl="https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg"
              authorProfileLink="https://www.babychakra.com/user/NjE2MTc"
              feedContent={description}
              imgUrls={imgUrls}
              cardType="image"
              likeCount={174}
              saveCount={56}
              shareCount={0}
              commentsList={commentsList}
            />
            <FeedCard
              wrapperClassName="mb-3"
              authorName="Babychakra"
              authorImgUrl="https://cdn-sp.babychakra.com/users/original/61518/profile_5903280f43735.jpg"
              authorProfileLink="https://www.babychakra.com/user/NjE2MTc"
              feedContent={description}
              likeCount={174}
              saveCount={56}
              shareCount={0}
              videoEmbedId="19tLCuXupl8"
              cardType="video"
              commentsList={commentsList}
            />
            <LiveVideoCard
              liveVideosData={liveVideosData}
              wrapperClassName="mb-3"
            />
            <QuestionCard
              wrapperClassName="mb-3"
              question="I want to return my parcel"
              postedUserName={"Anonymous"}
              userProfilePictureUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
              noOfViews={280}
              userImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
              commentsList={commentsList}
            />
            <ArticleCard
              wrapperClassName="mb-3"
              authorName="Dr Astha Nagpal"
              authorImgUrl="https://cdn-sp.babychakra.com/users/default-gender-2.png"
              authorProfileLink="https://www.babychakra.com/user/MjU4MDc0NA"
              subheadings={{
                noOfArticlesPublished: 5,
              }}
              articleCoverUrl="https://bbc-wp-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/10170607/Nayana-1.jpg"
              articleTitle="Pregnancy – A Mutual Commitment To Parenthood"
              minsToRead={2}
              noOfViews={3}
            />
            <AnnouncementCard
              announcementsData={announcementsData}
              wrapperClassName="mb-3"
            />
          </div>
          <div>
            <DownloadAppContent
              question="Do you have any questions about your pregnancy?"
              downloadTxt="Download the BabyChakra App for"
              list={[
                "Answers from Parents & Experts",
                "Personalised Tips",
                "One-on-one chats with Experts",
              ]}
              wrapperClassName="mb-2"
            />
            <DailyTipAccordian
              tipsData={tipsData}
              wrapperClassName="my-2"
              tipSubtitle={tipSubtitle}
              startTipImgUrl={startTipImgUrl}
              endTipImgUrl={endTipImgUrl}
              selectedScaleUnit={selectedScaleUnit}
              scale={scale}
            />
            <JourneyCard wrapperClassName="mb-3" journeyList={journeyList} />
            <RelatedQuestions
              relatedQuestions={relatedQuestions}
              wrapperClassName="mb-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getInitialProps = async (context) => {
  return {
    isMobile: getIsSSRMobileView(context),
  };
};

export default Home;
