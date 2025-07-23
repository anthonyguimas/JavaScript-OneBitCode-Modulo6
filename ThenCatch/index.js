function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada...");
    setTimeout(() => {
      if (true) {
        reject("A promise foi rejeitada");
      } else {
        console.log("Resolvendo a promise...");
        resolve(42);
      }
    }, 2000);
  });
}

const p = execute();

p.then((result) => {
  console.log(`A promise foi resolvida. O resultado foi: ${result}`);
})
  .catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada.");
  });
