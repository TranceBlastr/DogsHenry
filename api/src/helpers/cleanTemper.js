const cleanTemper = (data) => {
  return data.map((element) => {
    return {
      id: element.id,
      temperament: element.temperament,
    };
  });
};
module.exports = cleanTemper;
