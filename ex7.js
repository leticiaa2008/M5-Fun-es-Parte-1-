let x = 10;

function shadowExample(x) {
  console.log("Parâmetro:", x);
  console.log("Variável global:", globalThis.x);
}

shadowExample(20);
