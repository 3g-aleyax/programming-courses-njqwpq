//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let a: number;
a = parseInt(prompt('Enter a number between 1 and 3'));
while (a < 1 || a > 3) {
  a = parseInt(prompt('Enter a number between 1 and 3'));
}
console.log(a);


