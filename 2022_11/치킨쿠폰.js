function solution(chicken) {
  var eatenChicken = chicken;
  var coupons = chicken;
  while (coupons >= 10) {
    eatenChicken = eatenChicken + parseInt(coupons / 10);
    coupons = (coupons % 10) + parseInt(coupons / 10);
  }
  return eatenChicken - chicken;
}
