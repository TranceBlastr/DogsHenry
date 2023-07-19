function validate(state) {
  const errors = {};

  if (!state.name) {
    errors.name = "Se requiere un nombre";
  }
  if (state.name.length < 3) {
    errors.name = "Ingrese mas de 3 letras para el nombre";
  }
  if (!state.image) {
    errors.image = "La URL de la imagen es obligatoria.";
  } else {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(state.image)) {
      errors.image = "Ingrese una URL válida.";
    }
  }
  if (!state.heightMin) {
    errors.heightMin = "Se necesita una altura mínima";
  }
  if (!state.heightMax) {
    errors.heightMax = "Se necesita una altura máxima";
  }
  if (
    state.heightMin !== null &&
    state.heightMax !== null &&
    state.heightMin > state.heightMax
  ) {
    errors.heightMin = "La altura minima no puede ser mayor que la maxima";
  }
  if (!state.weightMin) {
    errors.weightMin = "Se necesita un peso mínimo";
  }
  if (!state.weightMax) {
    errors.weightMax = "Se necesita un peso máximo";
  }
  if (
    state.weightMin !== null &&
    state.weightMax !== null &&
    state.weightMin > state.weightMax
  ) {
    errors.weightMin = "El peso minimo no puede ser mayor que el peso maximo";
  }
  if (!state.lifeSpanMin) {
    errors.lifeSpanMin = "Se necesita una expectativa de vida mínima";
  }
  if (!state.lifeSpanMax) {
    errors.lifeSpanMax = "Se necesita una expectativa de vida máxima";
  }
  if (
    state.lifeSpanMin !== null &&
    state.lifeSpanMax !== null &&
    state.lifeSpanMin > state.lifeSpanMax
  ) {
    errors.lifeSpanMin =
      "La expectativa de vida minima no puede ser mayor que la maxima";
  }
  if (!state.image) {
    errors.image = "Se requiere una imágen para este perro";
  }
  if (state.image.length > 254) {
    errors.image = "La URL no puede tener mas de 255 caracteres";
  }

  if (state.temperament.length === 0) {
    errors.temperament = "Debe seleccionar al menos 1 temperamento";
  }
  return errors;
}
export default validate;
