type knifeObject = {
  knifeStyle: string;
  metalType: string;
  singleBevel: string;
  currentSharpness: string;
};

// Can do interface or type, however for interface allows classes and other interfaces to extend it.
// Type also works better for generics.
// Try to follow the set standards.

// Breakdown Chart: https://fem-react-typescript.vercel.app/Types%20versus%20interfaces.md

export { knifeObject };
