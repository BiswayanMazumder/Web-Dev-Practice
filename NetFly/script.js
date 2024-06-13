let trialemail=document.querySelector('#email')
let trialbutton=document.querySelector('.GetStarted')
trialbutton.addEventListener('click', async function(){
    let values=trialemail.value;
    console.log(values)
    const emailData = {
    
        service_id: "service_yqb9qrh",
        template_id: "template_mlpms3h",
        user_id: "AFarhcZCFw4YaCRCi",
        template_params: {
            user_email:values,
        }
    };
    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        });
        console.log(response)
        if (response.ok) {
            const result = await response.json();
            console.log('Email sent successfully:', result);
        } else {
            console.error('Error sending email:', response.statusText);
        }
    } catch (error) {
        console.error('Network error:', error);
    }

})