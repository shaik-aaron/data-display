import Chance from "chance";

const generateData = () => {
  return new Promise((resolve, reject) => {
    const randomData = [];
    for (let i = 0; i < 49; i++) {
      let chance = new Chance();
      randomData.push({
        id: chance.cf(),
        name: chance.name(),
        age: chance.age(),
        DOB: chance.birthday(),
      });
    }
    if (randomData.length !== 0) {
      resolve(randomData);
    } else {
      reject("An error has occured.");
    }
  });
};

export default generateData;
