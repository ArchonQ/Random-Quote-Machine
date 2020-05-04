import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const QuoteMachine = (props) => (
  <Card>
    <CardContent>
      {props.selectedQuote ? (
        <Typography>
          {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typography>
      ) : null}
      <CardActions>
        <Button size="small" onClick={props.assignNewQuoteIndex}>
          Next Quote
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default QuoteMachine;
