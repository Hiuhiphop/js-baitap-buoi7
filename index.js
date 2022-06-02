function ex1() {
  var count = "";
  for (var k = 1; k <= 10; k++) {
    for (var i = k * 10 - 9; i <= k * 10; i++) {
      count += i + " ";
    }
    count += "<br>";
  }
  document.getElementById("ex1").innerHTML = count;
}

function ex2() {
  //   debugger;
  var str = document.getElementById("ex2").value;
  var arr = str.split(" ");
  console.log(arr);
  var prime = "";
  var flag = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 2) {
      flag = false;
    } else {
      for (var k = 2; k < arr[i] - 1; k++) {
        if (arr[i] % k == 0) {
          flag = false;
          break;
        } else {
          prime = arr[i];
        }
      }
    }
  }
  if (flag == true) {
    console.log(prime, "là số nguyên");
  }
}
