let cards = [];

function writeCards(names, surprise)  {
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
  }
  return cards;
  }

  writeCards(names);

function countDown(positiveNumber){
while(positiveNumber >= 0) {
  console.log(positiveNumber);
  positiveNumber--;
}
}
 