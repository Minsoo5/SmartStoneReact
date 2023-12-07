export default function angleCalculation(
  knifeStyle: string,
  metalType: string,
  singleBevel: string,
  currentSharpness: string
) {
  //default angles for knife styles and adjust with metal type and bevel

  let angle = 0;
  switch (knifeStyle) {
    case "Chef Knife":
      angle = 18;
      break;

    case "Butcher Knife":
      angle = 25;
      break;

    case "Slicing Knife":
      angle = 15;
      break;
  }

  // Higher carbon alloys can hold a "sharper" angle

  switch (metalType) {
    case "High Carbon":
      angle -= 1;
      break;

    case "Stainless Steel":
      angle += 0;
      break;

    case "Damascus":
      angle -= 1.5;
      break;
  }

  switch (singleBevel) {
    case "Yes":
      break;

    case "No":
      break;
  }

  return angle;
}
