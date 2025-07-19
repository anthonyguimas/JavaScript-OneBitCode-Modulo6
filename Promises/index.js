// const p = new Promise((resolve, reject) => {
//   console.log("A promise está sendo executada.");
//   setTimeout(() => {
//     if (true) {
//       reject(false);
//     }
//     console.log("Resolvendo a promise...");
//     resolve(true);
//   }, 2000);
// });

// console.log(p);

function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada");
    setTimeout(() => {
      console.log("Resolvendo a promise");
      resolve("Resultado");
    });
  });
}

const p = execute();

console.log(p);
