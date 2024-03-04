function townInfo(array) {
  let towns = {};

  for (const element of array) {
    const info = element.split(" | ");
    const [town, latitude, longitude] = info;

    towns = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(towns);
  }
}
townInfo(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
