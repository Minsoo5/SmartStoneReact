import { knifeObject } from "./objectTypes";

const CurrentKnife = (props: knifeObject) => {
  let sharpness: string = "";
  let style: string = "";
  let metal: string = "";
  let bevel: string = "";

  props.currentSharpness !== "" && props.currentSharpness == "Very Dull"
    ? (sharpness = "A Very Dull")
    : props.currentSharpness == "Dull"
    ? (sharpness = "A Dull")
    : props.currentSharpness == "Almost Sharp"
    ? (sharpness = "An Almost Sharp")
    : null;

  props.knifeStyle !== "" && props.knifeStyle === "Chef Knife"
    ? (style = "Chef Knife")
    : props.knifeStyle === "Butcher Knife"
    ? (style = "Butcher Knife")
    : props.knifeStyle === "Slicing Knife"
    ? (style = "Slicing Knife")
    : null;

  props.metalType !== "" && props.metalType === "High Carbon"
    ? (metal = "High Carbon ")
    : props.metalType === "Stainless Steel"
    ? (metal = "Stainless Steel ")
    : props.metalType === "Damascus"
    ? (metal = "Damascus ")
    : null;

  props.singleBevel !== "" && props.singleBevel === "Yes"
    ? (bevel = "Single Edge")
    : props.singleBevel === "No"
    ? (bevel = "Double Edge")
    : null;

  let knife: string = `${sharpness} ${style} made with ${metal} with a ${bevel}`;

  return sharpness !== "" && style !== "" && metal !== "" && bevel !== "" ? (
    <h2>
      Current Knife:
      <br></br>
      {knife}
    </h2>
  ) : null;
};

export default CurrentKnife;
