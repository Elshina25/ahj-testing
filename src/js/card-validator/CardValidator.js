export default class CardValidator {
    constructor(container) {
        this.container = container;
    }

    static get markup() {
        return `
        <ul class="card-types">
            <li class="card visa" title="Visa"></li>
            <li class="card mastercard" title="Mastercard"></li>
            <li class="card american-express" title="American Express"></li>
            <li class="card union-pay" title="UnionPay"></li>
            <li class="card jcb" title="JCB"></li>
            <li class="card mir" title="Mir"></li>
        </ul>
        <form class="card-validator">
            <div class="form-group">
                <input class="input" type="text" name="card-number" placeholder="Enter card number">
                <button class="button">Validate</button>
            </div>
        </form>
        `;
    }

    bindedToDOM() {
        this.container.innerHTML = CardValidator.markup;
    }
}