const parseJSONFields = (obj, fields) => {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fields.forEach((field) => {
        if (typeof obj[i][field] === "string") {
          try {
            obj[i][field] = JSON.parse(obj[i][field]);
          } catch (error) {
            console.error(`Error parsing JSON for field ${field}:`, error);
          }
        }
      });
    }
  } else if (typeof obj === "object" && obj !== null) {
    fields.forEach((field) => {
      if (typeof obj[field] === "string") {
        try {
          obj[field] = JSON.parse(obj[field]);
        } catch (error) {
          console.error(`Error parsing JSON for field ${field}:`, error);
        }
      }
    });
  }
  return obj;
};

export default parseJSONFields;

// for (let i = 0; i < packageData.length; i++) {
//   packageData[i].attractions = JSON.parse(packageData[i].attractions || []);
//   packageData[i].images = JSON.parse(packageData[i].images || []);
//   packageData[i].pricePerPerson = JSON.parse(
//     packageData[i].pricePerPerson || [],
//   );
//   packageData[i].tourHighLights = JSON.parse(
//     packageData[i].tourHighLights || [],
//   );
// }
