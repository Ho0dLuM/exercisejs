// Number 1.
for (i = 0; i <= 1000; i+= 100) {
  console.log(i);
}
// Number 2.
for (j = 1; j<= 128; j*=2) {
  console.log(j);
}
// Number 3.
for (k = 0; k <= 10; k+=2 ) {
  console.log(k);
}
// Number 4.
for (l = 3; l <= 15; l+=3) {
  console.log(l);

// Number 5.
for (m = 9; m >= 0; m -= 1) {
  console.log(m);
}

// Number 6.
for (n = 1; n <= 4; n += 1) {
  console.log(n)
  console.log(n)
  console.log(n)
}

// Number 7.
for (o = 0; o <= 2; o++){
  for (p = 0; p <=4; p++){
  console.log(p);
  }
};

for (var q = 1; q <= 50; q++) {
  if ((q%3 === 0) && (q%5 === 0)) {
    console.log(q + " FizzBuzz");
  } else if (q%3 === 0) {
    console.log(q + " Fizz");
  } else if (q%5 === 0) {
    console.log(q + " Buzz");
  } else {
    console.log(q + " This number is not divisible by 3 or 5")
  }
};

for (var r = 1; r <=25; r++) {
  if(r%2 === 0) {
    console.log(r + " Even Number");
  } else {
    console.log(r + " Odd Number");
  }
};

var multiples = 0
for (var s = 0; s <= 1000; s++) {
  if(s%3 === 0 || s%5 === 0 ) {
    multiples += s;
  }
  console.log(multiples);
}


for (var t = 0; t <= 7; t++) {
  console.log("#");
}
