const countVowels = require('../redGreenRefactor.js');  //imports module

describe("countVowels", function() {

   test("check to see if 'My name is Jeff' is the input that 4 is the output",   //Tests "expected input"
function() {
       expect(countVowels("My name is Jeff")).toBe(4);
   });

   test("If input is undefined the output should be 0",    //Tests undefined input
function() {
       expect(countVowels()).toBe(0);
   });

   test("If input is an empty string output should be 0",  //Tests empty string
function() {
       expect(countVowels("")).toBe(0);
   });

   test("check to see if MY NAME IS JEFF is the input that 4 is the output",   //Tests capital letters
function() {
       expect(countVowels("MY NAME IS JEFF")).toBe(4);
   });
 });