var _ = require("lodash");

try {
  _.cloneDeep({});
  document.getElementById("log").textContent = "Clone successful!";
} catch(e) {
  document.getElementById("log").textContent = e.stack;
}

