import React from "react";

import {test, add, Button} from 'node_modules/next-lib2/dist/index'

const Home = () => {
  console.log("vidhya test "+test(1,2))
  console.log("vidhya add "+add())

  return (
    <>
      <Button />
    </>
  );
};

export default Home;
