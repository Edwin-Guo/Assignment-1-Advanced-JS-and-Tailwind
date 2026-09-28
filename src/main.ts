// This function takes the values you're converting to and from 
// and converts the input values provided from the HTML as strings and converts them to a Number array
// splitting the input values up where commas are found.
  //  (Input.value).split(",").map(Number)

// Since converting to a number array from a string, anything that isn't a number is converted to NaN
// As it will run through every element found in the array
  // numArray.map((num) => Number.isNaN(num)? "NaN": unitConversion(num).toFixed(2)).join(", ")
// any NaN found will be converted to a NaN string in the array and the rest converted to the desired value
// It will then join the new string array contents into one string separated by a comma and display it on the site
// Made by Edwin
const converter = (from: string, to: string) => {
  if (from === "miles" && to === "km"){
    const numArray = (milesInput.value).split(",").map(Number);
    milesResult.textContent = numArray.map((num) => Number.isNaN(num)? "NaN": milesToKilometers(num).toFixed(2)).join(", ");
  } else if (from === "km" && to === "miles") {
    const numArray = (kilometersInput.value).split(",").map(Number);
    kilometersResult.textContent = numArray.map((num) => Number.isNaN(num)? "NaN": kilometersToMiles(num).toFixed(2)).join(", ");
  } else if (from === "kg" && to === "lbs") {
    const numArray = (kgInput.value).split(",").map(Number);
    kgResult.textContent = numArray.map((num) => Number.isNaN(num)? "NaN": kilogramsToPounds(num).toFixed(2)).join(", ");
  } else if (from === "lbs" && to === "kg") {
    const numArray = (lbsInput.value).split(",").map(Number);
    lbsResult.textContent = numArray.map((num) => Number.isNaN(num)? "NaN": poundsToKilograms(num).toFixed(2)).join(", ");
  } else {
    console.log("Invalid Conversion Units");
  }
}
// Distance typescript functionality by Edwin
// Distance conversion functions
const milesToKilometers = (miles: number): number => miles * 1.609344;
const kilometersToMiles = (kilometers: number): number => kilometers / 1.609344;
// HTML elements for miles
const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;
// Activates the functions on click
milesButton?.addEventListener("click", () => converter("miles", "km"));
// Outdated conversion formula with no array functionality
// const milesConvert = (): void => {
//   const miles: number = Number(milesInput.value);
//   const kilometers: number = milesToKilometers(miles);
//   milesResult.textContent = kilometers.toFixed(2);
// }

const kilometersInput = document.getElementById("kilometers-input") as HTMLInputElement;
const kilometersButton = document.getElementById("kilometers-button") as HTMLButtonElement;
const kilometersResult = document.getElementById("kilometers-result") as HTMLParagraphElement;

kilometersButton?.addEventListener("click", () => converter("km", "miles"));
// const kilometersConvert = (): void => {
//   console.log("H");
//   const kilometers: number = Number(kilometersInput.value);
//   const miles: number = kilometersToMiles(kilometers);
//   kilometersResult.textContent = miles.toFixed(2);
// }

//--- Temperature --- By Stephanie
type TempInput = number | number[];
const createTempConverter = (fromUnit: string, toUnit: string) => {
  const formulas: Record<string, (v: number) => number> = {
    "c-to-f": (v) => (v * 9) / 5 + 32,
    "f-to-c": (v) => ((v - 32) * 5) / 9,
  };
  const formula = formulas[`${fromUnit}-to-${toUnit}`];
  if (!formula) {
    throw new Error(`No conversion available for ${fromUnit} to ${toUnit}`);
  }

  return (input: TempInput): TempInput => {
    if (Array.isArray(input)) {
      return input.map((v) => Number(formula(v).toFixed(2)));
    }
    return Number(formula(input).toFixed(2));
  };
};
const celsiusToFahrenheit = createTempConverter("c", "f");
const fahrenheitToCelsius = createTempConverter("f", "c");

const parseTempInput = (raw: string): TempInput => {
  const parts = raw.split(",").map((s) => s.trim()).filter(Boolean);
  const nums = parts.map(Number);
  const first = nums[0];
  return nums.length === 1 && first !== undefined ? first : nums;
};

const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;

if (celsiusButton) {
  const celsiusConvert = (): void => {
    const result = celsiusToFahrenheit(parseTempInput(celsiusInput.value));
    celsiusResult.textContent = Array.isArray(result) ? result.join(", ") : String(result);
  };
  celsiusButton.addEventListener("click", celsiusConvert);
}

const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;

if (fahrenheitButton) {
  const fahrenheitConvert = (): void => {
    const result = fahrenheitToCelsius(parseTempInput(fahrenheitInput.value));
    fahrenheitResult.textContent = Array.isArray(result) ? result.join(", ") : String(result);
  };
  fahrenheitButton.addEventListener("click", fahrenheitConvert);
}


//kg and lbs by Adrianne
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;

const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;
// Commented out to use converter()
// const handleKgConvert = (): void =>
// {
//   const kilograms: number = Number(kgInput.value);
//   const pounds: number = kilogramsToPounds(kilograms);
//   kgResult.textContent = pounds.toFixed(2);
// }
kgButton?.addEventListener("click", () => converter("kg", "lbs"));

const lbsInput = document.getElementById("pounds-input") as HTMLInputElement;
const lbsButton = document.getElementById("pounds-button") as HTMLButtonElement;
const lbsResult = document.getElementById("pounds-result") as HTMLParagraphElement;
// Commented out to use converter()
// const handleLbsConvert = (): void =>
// {
//   const pounds: number = Number(lbsInput.value);
//   const kilograms: number = poundsToKilograms(pounds);
//   lbsResult.textContent = kilograms.toFixed(2);
// }
lbsButton?.addEventListener("click", () => converter("lbs", "kg"));
