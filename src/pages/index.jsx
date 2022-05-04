import React from "react";

import {Button, getIsSSRMobileView} from "react-lib-g3";

const Home = ({ isSSRMobileView }) => {
  return (
    <>
      <p>{isSSRMobileView ? "mobile" : "desktop"}</p>
      <Button text='click here'/>
    </>
  );
};

Home.getInitialProps = async (ctx) => {

  return { isSSRMobileView: getIsSSRMobileView(ctx) };
};

export default Home;
