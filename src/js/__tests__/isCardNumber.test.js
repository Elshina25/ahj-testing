import { isCardNumber } from "../isCardNumber";

test("number belongs to credit card", () => {
  const checkNumber = isCardNumber("4716715717238562");
  expect(checkNumber).toBe(true);
});

test("number doesnot belong to credit card", () => {
  const checkNumber = isCardNumber("58834847648682348726478723");
  expect(checkNumber).toBe(false);
});
