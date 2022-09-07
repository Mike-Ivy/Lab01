function drawTriangle(n) {
  let output = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      output += "*";
    }
    if (i < n) {
    output += "\n";
    }
  }
  console.log(output);
}
drawTriangle(4);
