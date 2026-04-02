function calculate(coreDiameter) {
  const outerDimeterReel = parseFloat(document.getElementById("diameter").value);
  const substrateThickness = parseFloat(document.getElementById("thickness").value);
  

  if (!outerDimeterReel || !substrateThickness) {
    alert("Please enter all values");
    return;
  }

  const t = substrateThickness / 1000; // convert to mm

  const length = (Math.PI * (outerDimeterReel * outerDimeterReel - coreDiameter * coreDiameter)) / (4 * t);

  // convert mm → meters
  const meters = length / 1000;

  document.getElementById("result").innerText =
    "Length: " + meters.toFixed(2) + " meters";
}

function calculateCustomCore() {
  const coreDiameter = parseFloat(document.getElementById("core").value);
  const outerDimeterReel = parseFloat(document.getElementById("diameter").value);
  const substrateThickness = parseFloat(document.getElementById("thickness").value);
  

  if (!coreDiameter || !outerDimeterReel || !substrateThickness) {
    alert("Please enter all values");
    return;
  }

  const t = substrateThickness / 1000; // convert to mm

  const length = (Math.PI * (outerDimeterReel * outerDimeterReel - coreDiameter * coreDiameter)) / (4 * t);

  // convert mm → meters
  const meters = length / 1000;

  document.getElementById("result").innerText =
    "Length: " + meters.toFixed(20) + " meters";
}