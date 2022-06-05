function ex1() {
  var count = "";
  for (var k = 1; k <= 10; k++) {
    for (var i = k * 10 - 9; i <= k * 10; i++) {
      if (i < 10) {
        count += "0" + i + " ";
      } else {
        count += i + " ";
      }
    }
    count += "<br>";
  }
  document.getElementById("ex1").innerHTML = count;
}

function ex2() {
  var str = document.getElementById("ex2").value;
  var arr = str.split(" ");
  var checked = true;
  var prime = "";
  var nonPrime = "";
  for (var i = 0; i < arr.length; i++) {
    isPrimeCheck(arr[i]);
  }

  function isPrimeCheck(n) {
    var flag = true;
    if (n < 2) {
      flag = false;
    } else {
      for (var i = 2; i < n - 1; i++) {
        if (n % i == 0) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      return (prime += n + " ");
    } else {
      return (nonPrime += n + " ");
    }
  }

  document.getElementById("ex2-result").innerHTML =
    prime + "Là số nguyên tố" + "<br>" + nonPrime + "Không là số nguyên tố";
}

function ex3() {
  var n = document.getElementById("ex3").value;
  console.log(n);
  var sum = 0;
  var totalSum = 0;
  for (var i = 2; i <= n; i++) {
    sum = sum + i;
  }
  totalSum = sum + 2 * n;
  document.getElementById("ex3-result").innerHTML = totalSum;
}

function ex4() {
  var n = document.getElementById("ex4").value;
  var divisor = "";
  for (var i = n; i > 0; i--) {
    if (n % i == 0) {
      divisor += i + ",";
    }
  }
  document.getElementById("ex4-result").innerHTML = divisor + "là ước số";
}

function ex5() {
  let n = document.getElementById("ex5").value;
  let str = n.toString();
  let arr = str.split("");
  let reverseArr = [];
  for (let i = arr.length; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  let reverseNumber = reverseArr.join("");
  document.getElementById("ex5-result").innerHTML =
    "Số đảo ngược là: " + reverseNumber;
}

function ex6() {
  let sum = 0;
  for (let i = 1; i + sum <= 100; i++) {
    sum = sum + i;
    document.getElementById("ex6-result").innerHTML =
      i + " là số nguyên dương lớn nhất thỏa điều kiện";
  }
}

function ex7() {
  let n = document.getElementById("ex7").value;
  let multiplicationTable = "";
  for (let i = 0; i <= 10; i++) {
    let multi = n * i;
    multiplicationTable += n + " x " + i + " = " + multi + "<br>";
  }
  document.getElementById("ex7-result").innerHTML = multiplicationTable;
}

function ex8() {
  let card = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "AS",
    "7H",
    "9K",
    "10D",
  ];
  let player1 = [];
  let player2 = [];
  let player3 = [];
  let player4 = [];
  for (let i = 0; i < card.length; i++) {
    let playerIndex = i % 4;
    switch (playerIndex) {
      case 0:
        player1.push(card[i]);
        break;
      case 1:
        player2.push(card[i]);
        break;
      case 2:
        player3.push(card[i]);
        break;
      case 3:
        player4.push(card[i]);
        break;
    }
  }
  console.log(player1, player2, player3, player4);
  document.getElementById("ex8-result").innerHTML =
    "player 1: " +
    player1 +
    "<br>" +
    "player 2: " +
    player2 +
    "<br>" +
    "player 3: " +
    player3 +
    "<br>" +
    "player 4: " +
    player4;
}

function ex9() {
  let totalFoot = document.getElementById("ex9-totalFoot").value;
  let totalChickenAndDog = document.getElementById(
    "ex9-totalChickenAndDog"
  ).value;

  let totalChicken = 0;
  let totalDog = 0;
  /*
  Mỗi con gà có 2 chân, mỗi con chó có 4 chân nên ta có hệ phương trình sau:
    a + b = totalChhickenAndDog
    2a + 4b = totalFoot
  */
  totalDog = (totalFoot - 2 * totalChickenAndDog) / 2;
  totalChicken = totalChickenAndDog - totalDog;
  document.getElementById("ex9-result").innerHTML =
    "số con gà: " + totalChicken + "<br>" + "số con chó: " + totalDog;
}

function ex10() {
  let hour = document.getElementById("ex10").value;
  let arr = hour.split(":");
  if (arr[0] >= 12) {
    arr[0] = arr[0] - 12;
  }
  let radHours = arr[0] * 30;
  let radMinute = arr[1] * 6;
  let rad = radHours - radMinute;
  if (rad < 0) {
    rad = -rad;
  } else {
    rad = rad;
  }
  document.getElementById("ex10-result").innerHTML =
    "góc giữa 2 kim giờ và phút là: " + rad + " độ";
}
