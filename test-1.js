// const result = prompt(
//   "Ты бы хотела поиграть в симс? Если да нажми OK, если нет то Cansel"
// );
// // console.log(result);
// if (result === !null) {
//   const frage = prompt("Любишь ли ты Иришку ?");
//   console.log(frage);
// } else {
//   alert("Увы, но в симс может играть только тот человек, который любит Иришку");
// }

let result = prompt(
  "Ты бы хотела поиграть в симс? Если да нажми OK, если нет то Cansel"
);

if (result !== null) {
  // Користувач натиснув "OK"
  let proba = prompt("Любишь ли ты Иришку ?");
  console.log("Користувач натиснув OK");
  if (proba !== null) {
    alert("В таком случае, ты конечно же можешь поиграть)))");
  } else {
    alert(
      "Увы, но в симс может играть только тот человек, который любит Иришку"
    );
    // Користувач натиснув "Скасувати"
    console.log("Користувач натиснув Скасувати");
  }
} else {
  alert("О уууууужас");
  // Користувач натиснув "Скасувати"
  console.log("Користувач натиснув Скасувати");
}
