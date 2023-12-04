export default function gritCalculation(knifeStyle, metalType) {
  let maxGrit = 0;
  let minGrit = 0;

  switch (knifeStyle) {
    case "Chef Knife":
      maxGrit = 30;
      minGrit = 5;
      break;

    case "Butcher Knife":
      maxGrit = 10;
      minGrit = 5;
      break;

    case "Slicing Knife":
      maxGrit = 50;
      minGrit = 8;
      break;
  }

  switch (metalType) {
    case "High Carbon":
      maxGrit += 10;
      break;

    case "Stainless Steel":
      maxGrit += 0;
      break;

    case "Damascus":
      maxGrit += 10;
      break;
  }

  let stoneGrits = [];
  stoneGrits.push(minGrit * 100);
  stoneGrits.push(Math.floor((maxGrit - minGrit) / 2) * 100); // Multiplying by 100 now to keep everything rounded
  stoneGrits.push(maxGrit * 100);

  console.log(`Inside gritCalc ${stoneGrits}`);
  return stoneGrits;
}
