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