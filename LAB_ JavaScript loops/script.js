function drawTriangle(triangleSize) { 
  
  let n = triangleSize;
  let string = "";
  
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
   
}
drawTriangle(4)