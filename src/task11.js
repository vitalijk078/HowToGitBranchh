const allSeconds = 3665;
const hours = Math.floor(allSeconds / 3600);
const minutes = Math.floor((allSeconds % 3600) / 60);
const seconds = allSeconds % 60;
console.log("Время:", hours, "ч", minutes, "мин", seconds, "сек");
