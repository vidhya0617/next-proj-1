import React from "react";

import {Button} from "node_modules/next-lib2/dist/index.js";

const Home = ({ isSSRMobileView }) => {
  
  return (
    <>
     <Button />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  let userAgent;
  if (ctx?.req) {
    userAgent = ctx.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const isSSRMobileView = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return {
    isSSRMobileView,
  };
};

export default Home;
