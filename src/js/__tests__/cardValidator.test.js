import CardValidator from "../cardValidator/CardValidator";

test("check up validator rendering", () => {
  document.body.innerHTML = '<main class="container"></main>';
  const container = document.querySelector(".container");
  const validator = new CardValidator(container);
  validator.bindedToDOM();

  expect(container.innerHTML).toEqual(CardValidator.markup);
});
