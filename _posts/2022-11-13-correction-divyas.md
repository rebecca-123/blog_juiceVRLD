---
toc: false
description: 
categories: [pbl]
title: Corrections 
permalink: pbl/correction-divyas
---

{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 2014 Practice Exam MCQ Corrections\n",
    "- toc: true \n",
    "- badges: true\n",
    "- comments: true\n",
    "- categories: [jupyter]"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q11 seqSearchRecHelper change"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: A - if (last <= 0) return -1;\n",
    "\n",
    "Correction answer: B - if (last = 0) return -1; \n",
    "\n",
    "Explanation: The seqSearchRecHelper recursive method does not work as intended when target does not appear in data. In this case, when last becomes -1, the method will throw an ArrayIndexOutOfBoundsException in the first if statement after line 1. To prevent this, we should add a check to see if last is less than 0 and if it is, return -1 as expected.\n",
    "\n",
    "So, no equal sign because the equal sign will prevent an ArrayIndexOutOfBoundsException from being thrown if target does not appear in data."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q15 isSorted 1D int array implementations"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: D - l and ll only (no idea)\n",
    "\n",
    "Correction answer: A - l only\n",
    "\n",
    "Explanation: Choice II has a loop control variable k that starts at 0, increments by 1, and will terminate the loop when k has the value data.length. In each iteration, there is a check to see if the current value is larger than the subsequent value. If it is, false is returned because elements would not be nondecreasing. For example, if data[k] had the value 5 and data[k + 1] had the value 4, then data would contain an instance where the values were decreasing. Unfortunately, since the indices of an array start at 0 and go through data.length – 1, when k has the value data.length – 1 an ArrayIndexOutOfBoundsException will be thrown as the condition attempts to check data[data.length – 1] and data[data.length – 1 + 1] or data[data.length]."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q17 Shift elements in 1D int array"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: A {1, 2, 3, 4, 5, 6, 7}\n",
    "\n",
    "Correction answer: C {1, 2, 3, 5, 6, 7, 7}\n",
    "\n",
    "Explanation: The for loop control variable k starts with the value 3, is incremented by 1 and terminates the loop when its value is arr.length – 1. In the first iteration, when k is 3, arr[3] is assigned the value arr[4]. The contents of the arr have been updated to {1, 2, 3, 5, 5, 6, 7}. In the second iteration, when k is 4, arr[4] is assigned the value arr[5]. The contents of arr have been updated to {1, 2, 3, 5, 6, 6, 7}. In the third iteration, when k is 5, arr[5] is assigned the value arr[6]. The contents of arr have been updated to {1, 2, 3, 5, 6, 7, 7}. Then k is incremented to 6 and the loop terminates."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q18 Generate random index for ArrayList"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Assume that myList is an ArrayList that has been correctly constructed and populated with objects. Which of the following expressions produces a valid random index for myList?"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: C - (int) ( Math.random () * myList.size () ) + 1\n",
    "\n",
    "Correction answer: B - (int) ( Math.random () * myList.size () )\n",
    "\n",
    "Explanation: C is incorrect because the indices for myList are 0 through myList.size() – 1, for a total of myList.size() elements. Using this statement will result in a range between 1 and myList.size()."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q22 Book and AudioBook classes"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: accidently skip this question\n",
    "\n",
    "Correct answer: Line 4 will not compile because variables of type Book may only call methods in the Book class.\n",
    "\n",
    "Explanation: Since the books array has been declared of type Book, at compile time all objects stored in books are considered Book object regardless of their actual type. Therefore, any methods that are called on elements of books must be declared in Book. In order to call the pagesPerMinute() method on Book[0], we would need to use typecasting to let the compiler know that the object stored in the books array at this index is actually an AudioBook object.\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q23 manipulate method and animals List"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: D - [\"bear\", \"baboon\", \"zebra\", \"bass\", \"cat\", \"koala\"]\n",
    "\n",
    "Correct answer: B - [\"bear\", \"zebra\", \"bass\", \"cat\", \"koala\", \"baboon\"]\n",
    "\n",
    "Explanation: D would be the case if the loop condition was k > 1 rather than k > 0. Didn't fully understand the code.\n",
    "(B) The manipulate method contains a for loop with a loop control variable k that starts at the right most index of animals, decrements by 1 each time, until k is equal to 0. In the first iteration, when k is 5, if the element of animals at 5 (“baboon”) starts with a “b”, which it does, then this value is removed from the list and inserted at index 1. The list would then be {“bear”, “baboon”, “zebra”, “bass”, “cat”, “koala”}. In the second iteration, when k is 4, the element of animals at 4 (“cat”) does not start with a “b” and no changes are made to the list. In the third iteration, when k is 3, the element of animals at 3 (“bass”) starts with a “b”. This value is removed from the list and inserted at index 3. Since it was already at index 3, the list would not change. In the fourth iteration, when k is 2, the element of animals at 2 (“zebra”) does not start with a “b” and no changes are made to the list.  In the fifth iteration, when k is 1, the element of animals at 1 (“baboon”) starts with a “b”. It is removed from the list and inserted at index 5. The list would then be {“bear”, “zebra”, “bass”, “cat”, “koala”, “baboon”}.  Finally, k decrements to 0 which is not greater than 0 so the loop terminates. "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q26 Print odd integers in 1D array but not even"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Assume that the array arr has been defined and initialized as follows.\n",
    "\n",
    "A single-line code that reads as follows: int, open square bracket, close square bracket, arr equals, forward slash, asterisk, initial values for the array, asterisk, forward slash, semicolon.\n",
    "\n",
    "Which of the following will correctly print all of the odd integers contained in arr but none of the even integers contained in arr ?"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: E - for (int x : arr)  if (arr[x] % 2 != 0)  System.out.println(arr[x]);\n",
    "\n",
    "Correct answer: A - for (int x : arr)  if (x % 2 != 0)  System.out.println(x);\n",
    "\n",
    "Explanation: This algorithm uses an enhanced for loop to assign each element in arr to x. Using the modulus (%) operator to determine the remainder when dividing by 2, each value is checked to see if it is not even. If x is even, then x % 2 will be 0, since there is no remainder when you divide an even number by 2. If x is odd, then x % 2 will not equal 0, it will equal 1. "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q28 mystery method with int parameter description"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: B - x will never be 1 at // Point C.\n",
    "\n",
    "Correct answer: E - n will always be greater than 2 at // Point B.\n",
    "\n",
    "Explanation: The while loop only iterates while n is greater than 2 and //Point B is in the body of the while loop prior to any change to the value of n. At this point, n will always be greater than 2. B is incorrect beucase if the value of n is 2 or less in the original call to the method mystery, the loop will be skipped and x will be 1 at //Point C."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q29 Print values divisible by 4 using for loop"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: D - for (int k = 1; k <= 100; k = 4 * k)  System.out.println(k);\n",
    "\n",
    "Correct answer: E - for (int k = 4; k <= 100; k = k + 4)  System.out.println(k);\n",
    "\n",
    "Explanation: The original code segment prints all values between 1 and 100 that are evenly divisible by 4. The following values are printed: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, and 100. Choice E shows these values can also be printed by having a for loop that has a loop control variable k that starts at 4, increments by 4, and terminates when k is greater than 100.\n",
    "D is inccorect because it will print 4, 16, 64, since k is assigned the value of k * 4 for each iteration."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q33 Print sum after while loop"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: C - 12\n",
    "\n",
    "Correct answer: E - nothing is printed due to an infinite loop\n",
    "\n",
    "Explanation: Since k is never changed in the body of the while loop, it will always be 1 and less than 4. In a boolean expression with or (||) if one of the two expressions is true, the expression is true. This will cause an infinite loop."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q38 Compound Boolean expression with variables x and y"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: D - (y > 10000 && x > 1000) | | (y > 10000 && x < 1500)\n",
    "\n",
    "Correct answer: A - (y > 10000 | | x > 1000) && (y > 10000 | | x < 1500)\n",
    "\n",
    "Explanation: The original expression evaluates to true when either y is greater than 10000 or x is between 1000 and 1500. If the value of y is greater than 10000, this equivalent expression will evaluate to true since it is used in both of the or (||) expressions. If y is not greater than 10000, the only way the equivalent expression can evaluate to true is if x is between 1000 and 1500."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q39 recur method with int parameter"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: B - 9\n",
    "\n",
    "Correct answer: D - 16\n",
    "\n",
    "Explanation: B is not right because 9 is the value that is passed in the first recursive call to recur. The call recur(27) returns the value of recur(recur(9)) since 27 is greater than 10. The call recur(9) returns 18, since 9 is less than or equal to 10. Therefore, recur(recur(9)) is recur(18). The call recur(18) returns recur(recur(6)) since 18 is greater than 10. The call recur(6) returns 12, since 6 is less than or equal to 10. Therefore, recur(recur(6)) is recur(12). The call recur(12) returns recur(recur(4)) since 12 is greater than 10. The call recur(4) returns 8, since 4 is less than or equal to 10. Therefore, recur(recur(4)) is recur(8). The call recur(8) returns 16, since 8 is less than or equal to 10.  Therefore, recur(27)returns the value of 16."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Q40 whatsItDo with String parameter and substrings"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "My answer: A - WATC  WAT  WA  W\n",
    "\n",
    "Correct answer: C - W  WA  WAT  WATC\n",
    "\n",
    "Explanation: A is incorrect because this would be the output if the System.out.println(temp); line was before the recursive call to whatsItDo(temp); When the recursive call whatsItDo(temp); is executed, the current sequence of statements are paused. \n",
    "(C) The call whatsItDo(“WATCH”) assigns to temp a substring of “WATCH” starting at 0 and ending at 4 – 1 or 3, which is “WATC”. Next the call whatsItDo(“WATC”) is made. The call whatsItDo(“WATC”), sets its local temp to “WAT” and calls whatsItDo(“WAT”). The call whatsItDo(“WAT”), sets its local temp to “WA” and calls whatsItDo(“WA”). The call whatsItDo(“WA”), sets its local temp to “W” and calls whatsItDo(“W”). The call whatsItDo(“W”) reaches the base case and doesn’t do anything since the length of “W” is 1. Then we need to finish the call to whatsItDo(“WA”), which prints the value of its local temp, “W”.  Then we need to finish the call to whatsItDo(“WAT”), which prints the value of its local temp, “WA”. Then we need to finish the call to whatsItDo(“WATC”), which prints the value of its local temp, “WAT”. Then we need to finish the call to whatsItDo(“WATCH”), which prints the value of its local temp, “WATC”. And the recursive calls are complete."
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Java",
   "language": "java",
   "name": "java"
  },
  "language_info": {
   "name": "java"
  },
  "orig_nbformat": 4
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
 
