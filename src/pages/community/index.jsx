import React from "react";

import { FeedSection } from "next-lib-g3";

const Community = () => {
  return (
    <div>
      <div className="md:p-20">
        <div className="grid gap-5 items-start home-page-wrapper">
          <div>
            <FeedSection wrapperClassName="mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
