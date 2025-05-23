import { useState } from 'react';
import PlayerSelect from './PlayerSelect';

export default function Game() {
  const [player1, setPlayer1] = useState("0");
  const [player2, setPlayer2] = useState("0");
  const [result, setResult] = useState("");

  const outcomes = {
    "1-3": "Piedra 🪨 aplasta Tijera ✂️",
    "3-1": "Piedra 🪨 aplasta Tijera ✂️",
    "2-1": "Papel 📄 cubre Piedra 🪨",
    "1-2": "Papel 📄 cubre Piedra 🪨",
    "2-5": "Papel 📄 desautoriza Spock 🖖🏻",
    "5-2": "Papel 📄 desautoriza Spock 🖖🏻",
    "3-2": "Tijera ✂️ corta Papel 📄",
    "2-3": "Tijera ✂️ corta Papel 📄",
    "3-4": "Tijera ✂️ decapita Lagarto 🦎",
    "4-3": "Tijera ✂️ decapita Lagarto 🦎",
    "4-5": "Lagarto 🦎 envenena Spock 🖖🏻",
    "5-4": "Lagarto 🦎 envenena Spock 🖖🏻",
    "4-2": "Lagarto 🦎 debora Papel 📄",
    "2-4": "Lagarto 🦎 debora Papel 📄",
    "5-1": "Spock 🖖🏻 vaporiza Piedra 🪨",
    "1-5": "Spock 🖖🏻 vaporiza Piedra 🪨",
    "1-4": "Piedra 🪨 aplasta Lagarto 🦎",
    "4-1": "Piedra 🪨 aplasta Lagarto 🦎",
    "5-3": "Spock 🖖🏻 rompe Tijera ✂️",
    "3-5": "Spock 🖖🏻 rompe Tijera ✂️"
  };

  const playGame = () => {
    if (player1 === "0" || player2 === "0") {
      setResult("Seleccione una opción válida");
    } else if (player1 === player2) {
      setResult("Ninguno gana, empate");
    } else {
      const outcome = outcomes[`${player1}-${player2}`];
      setResult(outcome || "-");
    }
  };

  return (
    <div className="game-container">
      <PlayerSelect label="Jugador 1" value={player1} onChange={e => setPlayer1(e.target.value)} />
      <PlayerSelect label="Jugador 2" value={player2} onChange={e => setPlayer2(e.target.value)} />
      <button onClick={playGame}>Jugar</button>
      <p id="result">{result}</p>
    </div>
  );
}
