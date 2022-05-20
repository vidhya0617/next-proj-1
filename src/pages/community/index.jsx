import React from "react";

import { FeedSection } from "next-lib-g3";

const Community = () => {
  return (
    <div className="md:p-20 ">
      <div className="grid" style={{ gridTemplateColumns: "50%" }}>
        <FeedSection wrapperClassName="mb-3" />
      </div>
    </div>
  );
};

export default Community;
