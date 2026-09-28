const milesToKilometers = (miles: number): number => miles * 1.609344;
const kilometersToMiles = (kilometers: number): number => kilometers / 1.609344;

const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;

const milesConvert = (): void => {
  const miles: number = Number(milesInput.value);
  const kilometers: number = milesToKilometers(miles);
  milesResult.textContent = kilometers.toFixed(2);
}
milesButton.addEventListener("click", milesConvert);


const kilometersInput = document.getElementById("kilometers-input") as HTMLInputElement;
const kilometersButton = document.getElementById("kilometers-button") as HTMLButtonElement;
const kilometersResult = document.getElementById("kilometers-result") as HTMLParagraphElement;

const kilometersConvert = (): void => {
  console.log("H");
  const kilometers: number = Number(kilometersInput.value);
  const miles: number = kilometersToMiles(kilometers);
  kilometersResult.textContent = miles.toFixed(2);
}
kilometersButton.addEventListener("click", kilometersConvert);

//--- Temperature ---
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