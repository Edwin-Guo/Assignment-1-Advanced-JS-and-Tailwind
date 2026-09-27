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
milesButton?.addEventListener("click", milesConvert);


const kilometersInput = document.getElementById("kilometers-input") as HTMLInputElement;
const kilometersButton = document.getElementById("kilometers-button") as HTMLButtonElement;
const kilometersResult = document.getElementById("kilometers-result") as HTMLParagraphElement;

const kilometersConvert = (): void => {
  console.log("H");
  const kilometers: number = Number(kilometersInput.value);
  const miles: number = kilometersToMiles(kilometers);
  kilometersResult.textContent = miles.toFixed(2);
}
kilometersButton?.addEventListener("click", kilometersConvert);


//kg and lbs
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;

const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;
const handleKgConvert = (): void =>
{
  const kilograms: number = Number(kgInput.value);
  const pounds: number = kilogramsToPounds(kilograms);
  kgResult.textContent = pounds.toFixed(2);
}
kgButton?.addEventListener("click", handleKgConvert);

const lbsInput = document.getElementById("pounds-input") as HTMLInputElement;
const lbsButton = document.getElementById("pounds-button") as HTMLButtonElement;
const lbsResult = document.getElementById("pounds-result") as HTMLParagraphElement;
const handleLbsConvert = (): void =>
{
  const pounds: number = Number(lbsInput.value);
  const kilograms: number = poundsToKilograms(pounds);
  lbsResult.textContent = kilograms.toFixed(2);
}
lbsButton?.addEventListener("click", handleLbsConvert);