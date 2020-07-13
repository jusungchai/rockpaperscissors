import React, { useState } from 'react';
import Rock from './assets/rock.gif';
import Paper from './assets/paper.gif';
import Scissors from './assets/scissors.gif';
import VouchrBot from './assets/Robot.png';
import './styles/styles.css'

function App() {
  const [gameStatus, setGameStatus] = useState("begin");
  const [playerHand, setPlayerHand] = useState(Rock);
  const [botHand, setBotHand] = useState(VouchrBot);
  const options = [Rock, Paper, Scissors];

  const generateBotMove = () => {
    return (Math.floor((Math.random() * 3)));
  }

  const checkLogic = (botMoveIndex) => {
    if ((botMoveIndex + 1) % 3 === options.indexOf(playerHand)) {
      console.log("win")
      setGameStatus("win")
    } else if (options.indexOf(playerHand) === botMoveIndex) {
      console.log("tie")
      setGameStatus("tie")
    } else {
      console.log("lose")
      setGameStatus("lose")
    }
  }
  const handleShoot = () => {
    const botMoveIndex = generateBotMove();
    setBotHand(options[botMoveIndex]);
    checkLogic(botMoveIndex)
  }

  const renderOptions = () => {
    return options.map((option, i) => <div key={i}>
      <img src={option} alt={i} onClick={() => setPlayerHand(option)} />
    </div>)
  }

  const generateButton = () => {    
    return (
      gameStatus === "win" ? <button id="shoot-button" type="button" className="btn btn-primary" onClick={() => console.log("Claim Vouchr")}>Claim Vouchr</button> :
        <button id="shoot-button" type="button" className="btn btn-primary" onClick={() => {setGameStatus("play"); setBotHand(VouchrBot)}}>Try Again</button>
    )
  }

  const generateStatusMessage = () => {    
    return (
      <h1>{gameStatus.toUpperCase()}!!!</h1>
    )
  }

  const render = () => {
    switch (gameStatus) {
      case "begin":
        return (
          <button id="start-button" type="button" className="btn btn-primary" onClick={() => setGameStatus("play")}>Click to Start</button>
        )
      case "play":
        return (
          <div id="main-container">
            <div id="game-field">
              <div id="player">
                <img src={playerHand} alt="player" />
              </div>
              <div id="bot">
                <img src={botHand} alt="bot" />
              </div>
            </div>
            <div id="options">
              {renderOptions()}
            </div>
            <div id="shoot">
              <button id="shoot-button" type="button" className="btn btn-primary" onClick={() => handleShoot()}>Shoot</button>
            </div>
          </div>
        )
      default:
        return (
          <div id="main-container">
            <div id="game-field">
              <div id="player">
                <img src={playerHand} alt="player" />
              </div>
              <div id="bot">
                <img src={botHand} alt="bot" />
              </div>
            </div>
            <div id="options">
              {generateStatusMessage()}
            </div>
            <div id="shoot">
              {generateButton()}
            </div>
          </div>
        )
    }
  }

  return (
    <div className="App">
      <div>
        asdf
      </div>
      {render()}
    </div>
  );
}

export default App;
