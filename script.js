function calculate(coreDiameter) {
  const D = parseFloat(document.getElementById("diameter").value);
  const tMicrons = parseFloat(document.getElementById("thickness").value);

  if (!D || !tMicrons) {
    alert("Please enter all values");
    return;
  }

  const t = tMicrons / 1000; // convert to mm

  const length = (Math.PI * (D * D - coreDiameter * coreDiameter)) / (4 * t);

  // convert mm → meters
  const meters = length / 1000;

  document.getElementById("result").innerText =
    "Length: " + meters.toFixed(2) + " meters";
}