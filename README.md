[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Answer: The time complexity of my algorithm is $O(n * n!)$ This is where every permutation of the array is generated and every permutation is checked if it is sorted. The best case input for my implementation is an already sorted array. In this case, the time complexity would be $O(n)$ where the function iterates through the array to check if it is sorted. The worst case is when the array is almost sorted, but the last element is located at the start of the array. If you generated permutations randomly with no memory, the algorithm could potentially run infinitely, where the algorithm tries the same permutation over and over or it tries any permutation except for the sorted one infinitely. 

Sources: 
https://www.geeksforgeeks.org/different-ways-to-generate-permutations-of-an-array/ (used the pseudocode for the recursive method)
