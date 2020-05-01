import React, { Component } from "react";
import { random } from "lodash";
import Button from "./Components/button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState({ quotes }, () => {
          this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
        })
      );
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    } else {
      return random(0, this.state.quotes.length - 1);
    }
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className="App" id="quote-box">
        {this.selectedQuote
          ? `"${this.selectedQuote.quote}" - "${this.selectedQuote.author}"`
          : ""}
        <Button
          buttonDisplayName="Next Quote"
          clickHandler={this.nextQuoteClickHandler}
        />
      </div>
    );
  }
}

// function App() {
//   const nextQuoteHandler = () => {
//     console.log("hi");
//   };
//   return (
//     <div className="App" id="quote-box">
//       <Button buttonDisplayName="Next Quote" clickHandler={nextQuoteHandler} />
//     </div>
//   );
// }

export default App;
