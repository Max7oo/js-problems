function milesTravelled(minutes, speed) {
  let hoursTravelled = minutes / 60;
  let miles = hoursTravelled * speed;
  return Math.round(miles);
}

console.log("Miles travelled: ", milesTravelled(45, 70));
