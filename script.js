// =========================
// GENERIC CALCULATE FUNCTION
// =========================
function calculateLength(coreDiameter, outerDiameter, thickness) {
  if (!coreDiameter || !outerDiameter || !thickness) return null;

  const t = thickness / 1000; // microns → mm
  const length = (Math.PI * (outerDiameter ** 2 - coreDiameter ** 2)) / (4 * t);
  return length / 1000; // meters
}

// =========================
// 3" & 6" CORE CALCULATORS
// =========================
function setupFixedCore(coreDiameter, diameterId, thicknessId, resultId) {
  const outerInput = document.getElementById(diameterId);
  const thicknessInput = document.getElementById(thicknessId);
  const resultBox = document.getElementById(resultId);

  function updateResult() {
    const outer = parseFloat(outerInput.value);
    const thickness = parseFloat(thicknessInput.value);
    const length = calculateLength(coreDiameter, outer, thickness);

    resultBox.innerText = length ? `Length: ${length.toFixed(2)} meters` : "Length: – meters";
  }

  // Live update on input
  outerInput.addEventListener("input", updateResult);
  thicknessInput.addEventListener("input", updateResult);

  // Update also on button click
  return updateResult;
}

// =========================
// CUSTOM CORE CALCULATOR
// =========================
function setupCustomCore(coreId, diameterId, thicknessId, resultId) {
  const coreInput = document.getElementById(coreId);
  const outerInput = document.getElementById(diameterId);
  const thicknessInput = document.getElementById(thicknessId);
  const resultBox = document.getElementById(resultId);

  function updateResult() {
    const core = parseFloat(coreInput.value);
    const outer = parseFloat(outerInput.value);
    const thickness = parseFloat(thicknessInput.value);
    const length = calculateLength(core, outer, thickness);

    resultBox.innerText = length ? `Length: ${length.toFixed(2)} meters` : "Length: – meters";
  }

  // Live update on input
  coreInput.addEventListener("input", updateResult);
  outerInput.addEventListener("input", updateResult);
  thicknessInput.addEventListener("input", updateResult);

  // Update also on button click
  return updateResult;
}

// =========================
// INITIALIZE CALCULATORS
// =========================

// For 3" core
if (document.getElementById("diameter") && document.getElementById("result") && window.location.href.includes("core3.html")) {
  const update3Core = setupFixedCore(96, "diameter", "thickness", "result");
  window.calculate = update3Core; // called on button click
}

// For 6" core
if (document.getElementById("diameter") && document.getElementById("result") && window.location.href.includes("core6.html")) {
  const update6Core = setupFixedCore(183, "diameter", "thickness", "result");
  window.calculate = update6Core; // called on button click
}

// For Custom core
if (document.getElementById("core") && document.getElementById("resultCustom")) {
  const updateCustom = setupCustomCore("core", "diameter", "thickness", "resultCustom");
  window.calculateCustomCore = updateCustom; // called on button click
}