import React, { useState } from "react";
import CommentDetails from "./CommentDetails";
import AprovalCard from "./AprovalCard";
const App = () => {
  const btnValue = { text: "this is a text" };
  return (
    <>
      <AprovalCard>
        <CommentDetails name="anirban" time="2:30pm" comment="here is life" />
      </AprovalCard>
      <AprovalCard>
        <CommentDetails name="woshik" time="2:30pm" comment="here is life" />
      </AprovalCard>
      <AprovalCard>
        <CommentDetails name="rubel" time="2:30pm" comment="here is life" />
      </AprovalCard>
    </>
  );
};

export default App;
