function convertToObject(Json) {
    let object = JSON.parse(Json)

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
      }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')