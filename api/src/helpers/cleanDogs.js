const cleanDogs = (data) => {
  return data.map((element) => {
    return {
      id: element.id,
      name: element.name,
      image: element.image,
      height: element.height.metric,
      weight: element.weight.metric,
      lifeSpan: element.life_span,
    };
  });
};
module.exports = cleanDogs;
