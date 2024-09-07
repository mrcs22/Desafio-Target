/// Problem 1
console.log("####################################################");

const getFinalSumValue = () => {
  let idx = 13,
    sum = 0;
  k = 0;

  while (k < idx) {
    k += 1;
    sum += k;
  }

  return sum;
};

console.log("Answer 1: ", getFinalSumValue());

/// Problem 2
console.log("####################################################");

function verifyFibonacci(value) {
  const numericValue = typeof value === "number" ? value : Number(value);

  if (isNaN(numericValue) || numericValue < 0) return false;

  if (numericValue === 0) return true;

  let prevValue = 0;
  let currentValue = 1;

  while (currentValue <= value) {
    currentValue += prevValue;
    prevValue = currentValue - prevValue;

    if (currentValue === value) {
      return true;
    }
  }

  return false;
}

console.log(
  "Answer 2: ",
  `O valor 13 pertence a sequência de Fibonacci? ${verifyFibonacci(13)}`
);

/// Problem 3
console.log("####################################################");

const data = require("./data.json");

const getMonthOverview = () => {
  const dataWithPositiveValues = data.filter((item) => item.valor > 0);
  const averageValue =
    dataWithPositiveValues.reduce(
      (total, currentItem) => total + currentItem.valor,
      0
    ) / dataWithPositiveValues.length;

  let min = Infinity;
  let minNonzero = Infinity;
  let max = -Infinity;
  let daysOverAverage = 0;

  data.forEach((item) => {
    if (item.valor > max) {
      max = item.valor;
    }

    if (item.valor > 0 && item.valor < minNonzero) {
      minNonzero = item.valor;
    }

    if (item.valor < min) {
      min = item.valor;
    }

    if (item.valor > averageValue) {
      daysOverAverage++;
    }
  });

  return { averageValue, min, minNonzero, max, daysOverAverage };
};

console.log("Answer 3: ", getMonthOverview());

/// Problem 4
console.log("####################################################");

const valuesByDistrict = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  other: 19849.53,
};

function getPercentPerState(valuebyDistric) {
  const total = Object.values(valuebyDistric).reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  const result = {};

  for (const district in valuebyDistric) {
    const districtPercent = (valuebyDistric[district] / total) * 100;
    result[district] = Number(districtPercent.toFixed(2));
  }

  return result;
}

console.log(
  "Answer 4: ",
  `Porcentagem por estado: ${JSON.stringify(
    getPercentPerState(valuesByDistrict)
  )}`
);

/// Problem 5
console.log("####################################################");

const text = "abcdefghi";

const reverseText = (text) => {
  if (typeof text !== "string") return null;

  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
};

console.log("Answer 5: ", `Texto invertido: ${reverseText(text)}`);
console.log("####################################################");
