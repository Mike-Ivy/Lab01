function drawTriangle(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      output += "*";
    }
    output += "\n";
  }
  console.log(output);
}
drawTriangle(4);
