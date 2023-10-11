const summa = 200000;
const procent = 10; 
const srok = 2; 
const obciiprocent = (summa * procent * srok) / 100;
const vsasumma = summa + obciiprocent;

console.log("Cумма выплаты:", vsasumma, "рублей");
console.log("Переплата:", obciiprocent, "рублей");
