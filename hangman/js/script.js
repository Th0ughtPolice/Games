let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let count = 0;
function draw(){
  ctx.beginPath();
  switch (count){
    case 0:
      ctx.moveTo(60, 100);
      ctx.lineTo(10, 100);
      break;
    case 1:
      ctx.moveTo(10, 100);
      ctx.lineTo(10, 30);
      break;
    case 2:
      ctx.moveTo(10, 30);
      ctx.lineTo(50, 30);
      break;
    case 3:
      ctx.moveTo(50, 30);
      ctx.lineTo(50, 40);
      break;
    case 4:
      ctx.arc(47, 47, 7, 0, Math.PI * 2);
      break;
    case 5:
      ctx.moveTo(50, 54);
      ctx.lineTo(50, 74);
      break;
    case 6:
      ctx.moveTo(50, 57);
      ctx.lineTo(44, 77);
      break;
    case 7:
      ctx.moveTo(50, 57);
      ctx.lineTo(56, 77);
      break;
    case 8:
      ctx.moveTo(50, 74);
      ctx.lineTo(44, 90);
      break;
    case 9:
      ctx.moveTo(50, 74);
      ctx.lineTo(56, 90);
      break;
    default:
      break;
  }
  ctx.stroke();
}
var words = ["хомяк", "компьютер", "камень", "государство", "клавиатура", "человек", "город", "стол", "книга", "дерево", "процессор", "шрек", "зима"]; 
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (let i = 0; i < word.length; i++){
  answerArray[i] = "_";
}
var remainingLetters = word.length;
while (remainingLetters > 0){
  alert(answerArray.join(" "));
  var guess = prompt("Введите букву:");
  if (guess === null){
    alert("Приходите еще");
    break;
  }else if (guess.length != 1){
    alert("Введите ровно одну букву");
  }else if (word.includes(guess)){
    for (let i = 0; i < word.length; i++){
      if (guess == word[i]){
        answerArray[i] = guess;
        remainingLetters--;
      }
    }
  }else{
    draw();
    if (count === 9){
      alert("К сожалению вы проиграли");
      break;
    }
    count++;
  }
}
if (remainingLetters === 0){
  alert(answerArray.join(" "));
  alert("Поздравляем с победой, загаданное слово - " + word);
}
