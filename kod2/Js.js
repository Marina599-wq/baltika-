let scores = 0;

function checkTask(taskNumber) {
    let userInput;
    
    switch (taskNumber) {
        case 1:
            userInput = document.getElementById('user-input-1').value.trim();
            if (userInput === 'print("Hello, World!")') {
                document.getElementById('result-1').innerText = 'Правильно!';
                scores++;
            } else {
                document.getElementById('result-1').innerText = 'Неправильно. Попробуйте еще!';
            }
            break;
        case 2:
            userInput = document.getElementById('user-input-2').value.trim();
            if (userInput.includes('def square(num)') && userInput.includes('a ** 2')) {
                document.getElementById('result-2').innerText = 'Правильно!';
                scores++;
            } else {
                document.getElementById('result-2').innerText = 'Неправильно. Попробуйте еще!';
            }
            break;
        case 3:
            userInput = document.getElementById('user-input-3').value.trim();
            if (userInput.includes('max') && userInput.includes('def max_of_three(a, b, c)')) {
                document.getElementById('result-3').innerText = 'Правильно!';
                scores++;
            } else {
                document.getElementById('result-3').innerText = 'Неправильно. Попробуйте еще!';
            }
            break;
        default:
            break;
    }
}

function calculateScore() {
    const ctx = document.getElementById('score-chart').getContext('2d');
    const data = [scores, 3 - scores]; // scores vs incorrect attempts
    const labels = ['Правильные ответы', 'Неправильные ответы'];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Результаты',
                data: data,
                backgroundColor: ['#28a745', '#dc3545'],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}