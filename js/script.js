// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: May 2023
// This file contains the JS functions for index.html

'use strict'

function myButtonClicked() {
// This function does multiplication using a loop
// input
  const number1 = parseInt(document.getElementById('number-1').value)
  const number2 = parseInt(document.getElementById('number-2').value)

// process
  let counter = 0
  let answer = 0
  while (counter < number2) {
    answer += number1
    counter ++
  }

// output
  document.getElementById('answer').innerHTML = number1 + ' x ' + number2 + ' = ' + answer
}
