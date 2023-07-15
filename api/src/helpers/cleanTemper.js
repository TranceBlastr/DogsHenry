function cleanTemper(dogs) {
  const palabrasUnicas = ["No temperament available"];
  dogs.forEach((dog) => {
    if (dog.temperament) {
      const temperaments = dog.temperament.split(",");
      temperaments.forEach((temperament) => {
        const palabra = temperament.trim();
        if (!palabrasUnicas.includes(palabra)) {
          palabrasUnicas.push(palabra);
        }
      });
    }
  });
  return palabrasUnicas;
}

module.exports = cleanTemper;

//Estuve debugeando casi 4hs para darme cuenta de que algunos temperamentos de la api no estan disponibles
//Esto me daba un error al utilizar el split y me rompia el codigo, sin retornar nada.
