console.log("Inciando o programa");

// const timeoutId = setTimeout(() => {
//   console.log("3 segundos se passaram");
// }, 3000);

// clearTimeout(timeoutId);

let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo esgotado!");
  }
}, 3000);
