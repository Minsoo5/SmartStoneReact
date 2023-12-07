import { knifeObject } from "./objectTypes";

const CurrentKnife = (props: knifeObject) => {
  let knife: string = `A(n) ${props.currentSharpness} ${
    props.knifeStyle
  } made with ${props.metalType} steel, with a ${
    props.singleBevel === "Yes" ? "Single Bevel" : "Double Bevel"
  }`;

  // Display the current knife ONLY if ALL the fields are present.

  return props.currentSharpness !== "" &&
    props.knifeStyle !== "" &&
    props.metalType !== "" &&
    props.singleBevel !== "" ? (
    <h2>
      Current Knife:
      <br></br>
      {knife}
    </h2>
  ) : null;
};

export default CurrentKnife;
