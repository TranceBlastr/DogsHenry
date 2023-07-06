const cleanSingleDog = (dog) => {
  return {
    id: dog.id,
    name: dog.name,
    image: dog.image,
    height: dog.height.metric,
    weight: dog.weight.metric,
    lifeSpan: dog.life_span,
  };
};
module.exports = cleanSingleDog;
