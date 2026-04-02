function calculate(coreDiameter) {
  const outerDiameterReel = parseFloat(document.getElementById("diameter").value);
  const substrateThickness = parseFloat(document.getElementById("thickness").value);

  if (!outerDiameterReel || !substrateThickness) {
    alert("Please enter all values");
    return;
  }

  const t = substrateThickness / 1000; // microns → mm
  const length = (Math.PI * (outerDiameterReel**2 - coreDiameter**2)) / (4 * t);
  const meters = length / 1000;

  document.getElementById("result").innerText = "Length: " + meters.toFixed(2) + " meters";
}

function calculateCustomCore() {
  const coreDiameter = parseFloat(document.getElementById("core").value);
  const outerDiameterReel = parseFloat(document.getElementById("diameter").value);
  const substrateThickness = parseFloat(document.getElementById("thickness").value);

  if (!coreDiameter || !outerDiameterReel || !substrateThickness) {
    alert("Please enter all values");
    return;
  }

  const t = substrateThickness / 1000; // microns → mm
  const length = (Math.PI * (outerDiameterReel**2 - coreDiameter**2)) / (4 * t);
  const meters = length / 1000;

  document.getElementById("resultCustom").innerText = "Length: " + meters.toFixed(2) + " meters";
}