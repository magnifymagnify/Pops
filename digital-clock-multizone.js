// Digital Clock showing multiple time zones
// Usage: Just open this file in a browser, or embed in an HTML page.

const TIME_ZONES = [
  { label: "UTC", value: "UTC" },
  { label: "New York (EST/EDT)", value: "America/New_York" },
  { label: "London (BST/GMT)", value: "Europe/London" },
  { label: "Paris (CET/CEST)", value: "Europe/Paris" },
  { label: "Tokyo (JST)", value: "Asia/Tokyo" },
  { label: "Sydney (AEST/AEDT)", value: "Australia/Sydney" }
];

function getTimeInZone(timeZone) {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone
  });
}

function renderClock() {
  const tableRows = TIME_ZONES.map(
    tz =>
      `<tr><td>${tz.label}</td><td id="${tz.value.replace(/[\/() ]/g, '_')}"></td></tr>`
  ).join("");
  document.body.innerHTML = `
    <h2>Digital Clock (Multiple Time Zones)</h2>
    <table style="font-family:monospace;font-size:1.2em">
      <thead><tr><th align="left">Time Zone</th><th align="left">Current Time</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
  `;
}

function updateClock() {
  TIME_ZONES.forEach(tz => {
    const id = tz.value.replace(/[\/() ]/g, '_');
    const cell = document.getElementById(id);
    if (cell) cell.textContent = getTimeInZone(tz.value);
  });
}

renderClock();
updateClock();
setInterval(updateClock, 1000);