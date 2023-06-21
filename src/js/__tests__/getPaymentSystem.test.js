import { getPaymentSystem } from "../getPaymentSystem";

const visa = document.querySelector(".visa");
const mastercard = document.querySelector(".mastercard");
const amex = document.querySelector(".american-express");
const dinners = document.querySelector(".dinners-club");
const jcb = document.querySelector(".jcb");
const mir = document.querySelector(".mir");

describe("checking the type of payment system by card number", () => {
  test.each([
    ["Test 1", "4716715717238562", visa],
    ["Test 2", "5401729062649700", mastercard],
    ["Test 3", "372604328120133", amex],
    ["Test 4", "36503996784071", dinners],
    ["Test 5", "3529742495526645", jcb],
    ["Test 6", "2200000000000004", mir],
  ])("Если в %s передаём %d должен вернуть %s", (_, cardNumber, payment) => {
    expect(getPaymentSystem(cardNumber)).toBe(payment);
  });
});
