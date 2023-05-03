const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialValue = 0;
let totalBatteries = batteryBatches.reduce((i, x) => i + x, initialValue);

console.log(totalBatteries);
