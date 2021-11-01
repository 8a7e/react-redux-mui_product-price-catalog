import * as React from "react";

import Products from "../../components/products";

const Feed = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default React.memo(Feed);
