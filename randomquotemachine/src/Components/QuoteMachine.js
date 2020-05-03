import React from "react";
import Button from "./button";

const QuoteMachine = (props) => (
  <React.Fragment>
    {props.selectedQuote
      ? `"${props.selectedQuote.quote}" - "${props.selectedQuote.author}"`
      : ""}
    <Button
      buttonDisplayName="Next Quote"
      clickHandler={props.assignNewQuoteIndex}
    />
  </React.Fragment>
);

export default QuoteMachine;
