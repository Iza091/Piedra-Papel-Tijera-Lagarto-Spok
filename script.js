function playGame() {
  var player1 = document.getElementById("player1").value;
  var player2 = document.getElementById("player2").value;
  var result = document.getElementById("result");

  var player1Option = getPlayerOption(player1);
  var player2Option = getPlayerOption(player2);

  if (player1 === player2) {
    result.textContent = "Ninguno gana, empate";
  } else if (
    (player1 === "1" && player2 === "3") ||
    (player1 === "3" && player2 === "1")
  ) {
    result.textContent = "Jugador 1 gana, Piedra aplasta Tijera";
  } else if (
    (player1 === "2" && player2 === "1") ||
    (player1 === "1" && player2 === "2")
  ) {
    result.textContent = "Jugador 1 gana, Papel cubre Piedra";
  } else if (
    (player1 === "2" && player2 === "5") ||
    (player1 === "5" && player2 === "2")
  ) {
    result.textContent = "Jugador 1 gana, Papel desautoriza Spock";
  } else if (
    (player1 === "3" && player2 === "2") ||
    (player1 === "2" && player2 === "3")
  ) {
    result.textContent = "Jugador 1 gana, Tijera corta Papel";
  } else if (
    (player1 === "3" && player2 === "4") ||
    (player1 === "4" && player2 === "3")
  ) {
    result.textContent = "Jugador 1 gana, Tijera decapita Lagarto";
  } else if (
    (player1 === "4" && player2 === "5") ||
    (player1 === "5" && player2 === "4")
  ) {
    result.textContent = "Jugador 1 gana, Lagarto envenena Spock";
  } else if (
    (player1 === "4" && player2 === "2") ||
    (player1 === "2" && player2 === "4")
  ) {
    result.textContent = "Jugador 1 gana, Lagarto debora Papel";
  } else if (
    (player1 === "5" && player2 === "1") ||
    (player1 === "1" && player2 === "5")
  ) {
    result.textContent = "Jugador 1 gana, Spock vaporiza Piedra";
  } else {
    result.textContent = "Jugador 2 gana";
  }
  
  result.textContent += " (Jugador 1: " + player1Option + ", Jugador 2: " + player2Option + ")";
}

function getPlayerOption(option) {
  switch (option) {
    case "1":
      return "Piedra";
    case "2":
      return "Papel";
    case "3":
      return "Tijera";
    case "4":
      return "Lagarto";
    case "5":
      return "Spock";
    default:
      return "";
  }
}
