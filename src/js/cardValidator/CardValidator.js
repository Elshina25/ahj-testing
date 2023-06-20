import { isCardNumber } from "../isCardNumber";
import { getPaymentSystem } from "../getPaymentSystem";

export default class CardValidator {
  constructor(container) {
    this.container = container;

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get markup() {
    return `
        <ul class="card-types">
            <li class="card visa" title="Visa"></li>
            <li class="card mastercard" title="Mastercard"></li>
            <li class="card american-express" title="American Express"></li>
            <li class="card dinners-club" title="Dinners-club"></li>
            <li class="card jcb" title="JCB"></li>
            <li class="card mir" title="Мир"></li>
        </ul>
        <form class="card-validator">
            <div class="form-group">
                <input class="input" type="text" name="card-number" placeholder="Enter card number">
                <button class="button">Validate</button>
            </div>
            <div class="tooltip" style="display: none"></div>
        </form>
        
        `;
  }

  static get formSelector() {
    return ".card-validator";
  }

  static get inputSelector() {
    return ".input";
  }

  static get buttonSelector() {
    return ".button";
  }

  bindedToDOM() {
    this.container.innerHTML = CardValidator.markup;

    this.toolTip = this.container.querySelector(".tooltip");
    this.card = Array.from(this.container.querySelectorAll(".card"));
    this.form = this.container.querySelector(CardValidator.formSelector);
    this.input = this.form.querySelector(CardValidator.inputSelector);
    this.button = this.form.querySelector(CardValidator.buttonSelector);

    this.form.addEventListener("submit", this.onSubmit);
    this.input.addEventListener("input", this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    this.toolTip.classList.remove("valid", "not-valid");
    if (isCardNumber(value)) {
      getPaymentSystem(value);
      this.toolTip.style.display = "block";
      this.toolTip.classList.add("valid");
      this.toolTip.textContent = "карта прошла валидацию";
    } else {
      this.toolTip.classList.add("not-valid");
      this.toolTip.style.display = "block";
      this.toolTip.textContent = "карта не валидна!";
    }
  }

  onInput(e) {
    const value = e.target.value;
    getPaymentSystem(value);
    this.card.forEach((el) => {
      if (value === "") {
        this.toolTip.style.display = "none";
        el.classList.remove("disable");
      }
      if (value.length > 16) {
        el.classList.add("disable");
      }
    });
  }
}
