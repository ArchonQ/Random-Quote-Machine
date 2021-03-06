import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>

      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          className="button"
          id="new-quote"
          size="small"
          onClick={assignNewQuoteIndex}
        >
          Next Quote
        </Button>
        <IconButton
          variant="outlined"
          color="primary"
          id="tweet-quote"
          target="_blank"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=ThePowerOfInspiration`
          )}
        >
          <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
        </IconButton>
      </CardActions>
    </CardContent>
  </Card>
);

export default QuoteMachine;
