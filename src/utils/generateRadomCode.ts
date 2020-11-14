var textCode = "";
var numCode = "";
var result = "";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";

export function TextCode(textLength: number) {
  for (var i = 0; i < textLength; i++) {
    textCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  result = textCode;

  textCode = "";

  return result;
}

export function NumCode(numLength: number) {
  for (var i = 0; i < numLength; i++) {
    numCode += num.charAt(Math.floor(Math.random() * num.length));
  }

  result = numCode;

  numCode = "";

  return result;
}

export function TextNumCode(textLength: number, numLength: number) {
  for (var i = 0; i < textLength; i++) {
    textCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  for (var i = 0; i < numLength; i++) {
    numCode += num.charAt(Math.floor(Math.random() * num.length));
  }

  result = textCode + numCode;

  textCode = "";
  numCode = "";

  return result;
}
