import React from "react";
import { useRouter } from "next/router";

import { FeedSection, FeedAPI } from "next-lib-g3";

import PostList from "../json/PostList.json";

const Community = ({ feedResponse }) => {
  const router = useRouter();

  return (
    <>
      <div className="sm:p-10 ">
        <div className="grid grid-cols-[minmax(0,_1fr)] sm:grid-cols-[0.2fr_minmax(0,_0.5fr)]">
          <div className="hidden sm:block"></div>
          <FeedSection
            feedPostData={PostList}
            onPageNavigate={(id) => {
              router.push({ pathname: `/feedpost/${id}` });
            }}
          />
          {/*  */}
        </div>
      </div>
    </>
  );
};

Community.getInitialProps = async () => {
  try {
    const feedAPI = new FeedAPI();
    const data = await feedAPI.getFeedPostList();
    if (data?.status === 200) {
      return {
        feedResponse: data?.data?.data,
      };
    }
  } catch (error) {
    console.log("error " + error);
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
