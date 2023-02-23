//Inicializar el juego
function initGame() {
  //Declarar variables
  let score = 0;
  let money = 0;
  let level = 0;
  
  //Crear una función para minar manzanas
  function mineApples() {
    //Aumentar el nivel
    level++;
    //Aumentar el score
    score += level * 10;
    //Aumentar el dinero
    money += level * 10;
    //Mostrar el score, el dinero y el nivel
    console.log("Score: " + score + " | Money: " + money + " | Level: " + level);
  }
  
  //Crear una función para retirar el dinero
  function withdrawMoney() {
    //Verificar si hay suficiente dinero para retirar
    if (money >= 50) {
      //Retirar el dinero
      money -= 50;
      //Mostrar el mensaje de éxito
      console.log("Money withdrawn successfully!");
    } else {
      //Mostrar el mensaje de error
      console.log("You don't have enough money to withdraw!");
    }
  }
  
  //Crear una función para enviar el dinero a PayPal
  function sendMoneyToPayPal() {
    //Verificar si hay suficiente dinero para enviar
    if (money >= 100) {
      //Enviar el dinero
      money -= 100;
      //Mostrar el mensaje de éxito
      console.log("Money sent successfully!");
    } else {
      //Mostrar el mensaje de error
      console.log("You don't have enough money to send!");
    }
  }
  
  //Iniciar el juego
  mineApples();
  withdrawMoney();
  sendMoneyToPayPal();
}

//Llamar a la función para iniciar el juego
initGame();
