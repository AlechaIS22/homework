function summaCheckOfTopThreeShoppers(topThreeShoppers) {
    let summaCheck = 0;
    topThreeShoppers.forEach(i => {
        summaCheck += i;
    });
    return summaCheck;
  }
  
  let topThreeShoppers = [10000, 20000, 30000];
  console.log(summaCheckOfTopThreeShoppers(topThreeShoppers));