import { knifeObject } from "./objectTypes";

const CurrentKnife = (props: knifeObject) => {
  console.log(props);
  console.log(props.knifeStyle);
  return (
    <h2>
      {props.knifeStyle !== "" ||
      props.metalType !== "" ||
      props.singleBevel !== "" ||
      props.currentSharpness !== ""
        ? "Current Knife: "
        : null}
      <br></br>
      {props.singleBevel !== "" && props.singleBevel === "Yes"
        ? "Single Edged "
        : props.singleBevel === "No"
        ? "Double Edged "
        : null}
      {props.metalType !== "" && props.metalType === "High Carbon"
        ? "High Carbon "
        : props.metalType === "Stainless Steel"
        ? "Stainless Steel "
        : props.metalType === "Damascus"
        ? "Damascus "
        : null}
      {props.knifeStyle !== "" && props.knifeStyle === "Chef Knife"
        ? "Chef Knife"
        : props.knifeStyle === "Butcher Knife"
        ? "Butcher Knife"
        : props.knifeStyle === "Slicing Knife"
        ? "Slicing Knife"
        : null}
    </h2>
  );
};

export default CurrentKnife;
