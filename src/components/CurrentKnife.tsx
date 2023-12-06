interface SearchRequest {
  knifeStyle: string;
  metalType: string;
  singleBevel: string;
  currentSharpness: string;
}

const CurrentKnife = ({
  searchRequest: { knifeStyle, metalType, singleBevel, currentSharpness },
}: {
  searchRequest: SearchRequest;
}) => {
  return (
    <h2>
      {knifeStyle !== "" ||
      metalType !== "" ||
      singleBevel !== "" ||
      currentSharpness !== ""
        ? "Current Knife: "
        : null}
      <br></br>
      {singleBevel !== "" && singleBevel === "Yes"
        ? "Single Edged "
        : singleBevel === "No"
        ? "Double Edged "
        : null}
      {metalType !== "" && metalType === "High Carbon"
        ? "High Carbon "
        : metalType === "Stainless Steel"
        ? "Stainless Steel "
        : metalType === "Damascus"
        ? "Damascus "
        : null}
      {knifeStyle !== "" && knifeStyle === "Chef Knife"
        ? "Chef Knife"
        : knifeStyle === "Butcher Knife"
        ? "Butcher Knife"
        : knifeStyle === "Slicing Knife"
        ? "Slicing Knife"
        : null}
    </h2>
  );
};

export default CurrentKnife;
