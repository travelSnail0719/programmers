function solution(X, Y) {
  var answer = "";
  X = X.split("").sort((a, b) => b - a);
  Y = Y.split("").sort((a, b) => b - a);
  let x = 0,
    y = 0;
  while (x < X.length && y < Y.length)
    if (X[x] > Y[y]) x++;
    else if (X[x] < Y[y]) y++;
    else {
      answer += X[x];
      x++, y++;
    }
  return answer.length === 0 ? "-1" : answer[0] === "0" ? "0" : answer;
}