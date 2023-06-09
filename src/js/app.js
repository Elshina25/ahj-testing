import CardValidator from "./card-validator/CardValidator";

const container = document.querySelector('.container');
const validator = new CardValidator(container);
validator.bindedToDOM()