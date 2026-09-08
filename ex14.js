let mode = "light";

function toggleMode(mode) {
  console.log("Parâmetro:", mode);

  let newMode = mode === "light" ? "dark" : "light";

  console.log("Local:", newMode);

  return newMode;
}

console.log("Global:", mode);
console.log("Novo modo:", toggleMode(mode));
