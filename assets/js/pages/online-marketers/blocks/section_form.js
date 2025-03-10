
// Одичная форма на online-marketers большая

export function requestForm () {
    document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault(); 


    const formData = new FormData(this);


    if (!formData.get('full-name') || !formData.get('phone-number') || 
        !formData.get('email') || !formData.get('website-url')) {
        alert('Please fill in all required fields!');
        return;
    }


    fetch('../../send-mail-marketer.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your request has been submitted successfully!');
                this.reset(); 
            } else {
                alert('Failed to submit your request. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting your request.');
        });
});
}