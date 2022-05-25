import React from "react";

import { FeedSection, FeedAPI } from "next-lib-g3";

const Community = ({ feedResponse }) => {
  return (
    <>
      {feedResponse.length}

      <FeedSection />
    </>
  );
};

Community.getInitialProps = async (ctx) => {
  try {
    const feedAPI = new FeedAPI();
    const data = await feedAPI.getFeedPostList();
    if (data?.status === 200) {
      return {
        feedResponse: data?.data?.data,
      };
    }
  } catch (error) {
    return {
      feedResponse: [],
    };
  }
  return {
    feedResponse: [],
  };
};

export default Community;

// <div className="md:p-20 ">
//   <div className="grid" style={{ gridTemplateColumns: "50%" }}>
//   </div>
// </div>

// wrapperClassName = "mb-3";
