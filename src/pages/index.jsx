import React from "react";

import {Button, add, getIsSSRMobileView} from "next-lib2";

const Home = ({ isSSRMobileView }) => {

  React.useEffect(() => {
    console.log(add())
  }, []);
  
  return (
    <>
    {
      isSSRMobileView ? 'mobile' : 'desktop'
    }
     <Button />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
 
  console.log("from server "+add())
  
  return {
    isSSRMobileView: getIsSSRMobileView(ctx),
  };
};

export default Home;
