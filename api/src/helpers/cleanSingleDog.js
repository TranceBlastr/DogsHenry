const cleanSingleDog = (dog) => {
  return {
    pk: dog.id,
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    height: dog.height.metric,
    weight: dog.weight.metric,
    lifeSpan: dog.life_span,
    temperament: dog.temperament,
    breed_for: dog.breed_for,
  };
};
module.exports = cleanSingleDog;
