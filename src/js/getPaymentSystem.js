export function getPaymentSystem(cardNumber) {
  const cardsArray = Array.from(document.querySelectorAll(".card"));
  cardNumber = cardNumber.replace(/[\s]/g, "");
  const visa = document.querySelector(".visa");
  const mastercard = document.querySelector(".mastercard");
  const amex = document.querySelector(".american-express");
  const dinners = document.querySelector(".dinners-club");
  const jcb = document.querySelector(".jcb");
  const mir = document.querySelector(".mir");

  if (cardNumber.startsWith("4")) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("visa")) {
        el.classList.add("disable");
      }
    });
    return visa;
  }
  if (
    /^(5[1-5]|22210[0-9]|2221[1-9][0-9]|222[2-6][0-9][0-9]|2227[0-1][0-9]|222720|2720[0-8][0-9]|27209[0-9])/.test(
      cardNumber
    )
  ) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("mastercard")) {
        el.classList.add("disable");
      }
    });
    return mastercard;
  }
  if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("american-express")) {
        el.classList.add("disable");
      }
    });
    return amex;
  }
  if (cardNumber.startsWith("36")) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("dinners-club")) {
        el.classList.add("disable");
      }
    });
    return dinners;
  }
  if (/^35[2-8][0-9]|359[0-9]$/.test(cardNumber)) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("JCB")) {
        el.classList.add("disable");
      }
    });
    return jcb;
  }
  if (cardNumber.startsWith("2")) {
    cardsArray.forEach((el) => {
      if (!el.classList.contains("mir")) {
        el.classList.add("disable");
      }
    });
    return mir;
  }

  // cardsArray.forEach(el => {
  //     if (cardNumber.startsWith('4') && !el.classList.contains('visa')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('visa')
  //     } if (/^(5[1-5]|22210[0-9]|2221[1-9][0-9]|222[2-6][0-9][0-9]|2227[0-1][0-9]|222720|2720[0-8][0-9]|27209[0-9])/.test(cardNumber) && !el.classList.contains('mastercard')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('mastercard');
  //     } if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && !el.classList.contains('american-express')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('american-express');
  //     } if (cardNumber.startsWith('36') && !el.classList.contains('dinners-club')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('dinners-club');
  //     } if (/^35[2-8][0-9]|359[0-9]$/.test(cardNumber) && !el.classList.contains('JCB')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('JCB')
  //     } if (cardNumber.startsWith('2') && !el.classList.contains('mir')) {
  //         el.classList.add('disable');
  //         return el.classList.contains('mir')
  //     }

  // })
}
