
// Общая форма auidence

export function auidenceForm () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Вешаем обработчик на отправку формы

  
    const formData = new FormData(this);


    if (!formData.get('name') || !formData.get('phone') || !formData.get('email')) { // Проверка на заполненость
        alert('Please fill in all fields!');
        return; 
    }

    fetch('../../send-mail.php', {
        method: 'POST',
        body: formData // Отправляем фетч запрос
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your message has been sent!'); // Если успешно то выводим alert
                this.reset();
            } else {
                alert('Failed to send the message. Please try again later.'); // Если ошибка выводим 
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.'); // Если ошибка на стороне сервера выводим
        });
});



}