import React from "react";

import { FeedSection } from "next-lib-g3";

const description = `<div class="description"><p>Guess what's being prepared with love for your little ones at BabyChakra next ❤️</p><br>
<p>Do let us know in the comment section 👇</p><br>
 <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/CareComesFirst"><font color="#2b5998"><span>#</span></font><font color="#2b5998">CareComesFirst</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/childsafety"><font color="#2b5998"><span>#</span></font><font color="#2b5998">childsafety</font></a></b>  <b><a style="text-decoration:none" href="http://app.babychakra.com/hashtag/babycareandhygiene"><font color="#2b5998"><span>#</span></font><font color="#2b5998">babycareandhygiene</font></a></b> </div>`;

const imgUrls = [
  "https://cdn-sp.babychakra.com/feedpost/original/feedpost_119627928e60027f.jpeg",
  "https://cdn-sp.babychakra.com/feedpost/original/175816/feedpost_22861c2b9ddb067b",
];

const Community = () => {
  return (
    <div>
      <div className="p-20">
        <div className="grid gap-5 items-start home-page-wrapper">
          <div>
            <FeedSection
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
              commentsList={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
