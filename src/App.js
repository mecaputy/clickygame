import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import PictureCard from "./components/PictureCard";
import pictures from "./pictures.json";
import Container from "./components/Container";
import Row from "./components/Row";
import "./App.css";

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    clicked: []
  };
  // componentDidMount() {
  //   this.arrayShuffle();
  // }
  //handler for onclick
  handleClick = id => {
    if (this.state.clicked.includes(id)) {
      alert("You lose!");
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      this.handleReset();
    } else {
      // let score = this.state.score +1;
      this.handleIncrement();
      let newClicked = this.state.clicked;
      newClicked.push(id);
      this.setState({ clicked: newClicked });
    }
    this.arrayShuffle(this.state.pictures);
  };

  //handle increment for score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.score === 12) {
      alert("You win!");
    }
  };
  //handle random shuffle generate a random number from array slice command
  arrayShuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return this.setState({ pictures: array });
  };

  // handleShuffle = () => {
  //   // let shuffledPictures =
  //   //change state after shuffle new index values as state
  // }

  //handle game reset
  handleReset = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    //   this.handleShuffle();
  };

  render() {
    return (
      <div>
        <Navbar
          title="Clicky Game"
          //scores
        />
        <Wrapper>
          <br />
          <Title>
            <strong>Clicky Game</strong>
            <p>
              Click on an image to earn points, but don't click on any more than
              once
            </p>
            <p>Score: {this.state.score}</p>
          </Title>
          <Container>
            <Row>
              {this.state.pictures.map(picture => (
                <PictureCard
                  key={picture.id}
                  id={picture.id}
                  image={picture.image}
                  handleClick={this.handleClick}
                />
              ))}
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;