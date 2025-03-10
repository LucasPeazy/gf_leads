
// // Общая форма auidence

// export function auidenceForm () {
//     document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault(); 

  
//     const formData = new FormData(this);


//     if (!formData.get('name') || !formData.get('phone') || !formData.get('email')) {
//         alert('Please fill in all fields!');
//         return;
//     }

//     fetch('../../send-mail.php', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 alert('Your message has been sent!');
//                 this.reset();
//             } else {
//                 alert('Failed to send the message. Please try again later.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred while sending the message.');
//         });
// });



// }