const puzzles = document.querySelectorAll('.puzzle')
puzzles.forEach(puzzle => {
    const answerButton = puzzle.querySelector('.btn-answer')
    const answer = puzzle.querySelector('.answer')
    answerButton.addEventListener('click', function (){
        answer.classList.toggle('show')
        if (
            answer.classList.contains('show')){
            answerButton.innerHTML = "скрыть ответ"
            answerButton.style.backgroundColor = 'pink'
        }
        else {
            answerButton.innerHTML = "показать ответ"
            answerButton.style.backgroundColor = 'palegreen'
        }    })
})

// //DZ_#2
// function findMinMaxAndSum(numbers) {
//     if (numbers.length === 0) {
//         return "Список чисел пуст";
//     }
//
//     let min = numbers[0];
//     let max = numbers[0];
//     let sum = 0;
//
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//         if (number > max) {
//             max = number;
//         }
//         sum += number;
//     }
//
//     return `Наименьшее число: ${min}, Наибольшее число: ${max}, Сумма: ${sum}`;
// }
//
// const numbers = [5, 2, 9, 1, 5, 7];
// const result = findMinMaxAndSum(numbers);
// console.log(result);
