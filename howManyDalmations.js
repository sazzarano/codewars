function howManyDalmatians(num) {
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    return (num <= 10) ? dogs[0] : (num <= 50) ? dogs[1] : (num == 101) ? dogs[3] : dogs[2];
}

Test.assertEquals(howManyDalmatians(26), "More than a handful!");
Test.assertEquals(howManyDalmatians(8), "Hardly any");
Test.assertEquals(howManyDalmatians(14), "More than a handful!");
Test.assertEquals(howManyDalmatians(80), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(100), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(101), "101 DALMATIANS!!!");

/* FIX THE FOLLOWING CODE BLOCK
function howManyDalmations(numer :
  
  var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
return respond

Test.describe("Basic tests",_=>{
Test.assertEquals(howManyDalmatians(26), "More than a handful!");
Test.assertEquals(howManyDalmatians(8), "Hardly any");
Test.assertEquals(howManyDalmatians(14), "More than a handful!");
Test.assertEquals(howManyDalmatians(80), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(100), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(101), "101 DALMATIANS!!!");
})
*/

/* SOLUTION:
There are several things wrong with the code,
stemming from everything improper closure to typos
and misspellings. I went through, simplified and fixed
the issues.
*/