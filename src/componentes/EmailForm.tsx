import React, {useState} from 'react';
// TODO: Validar campo email

function EmailForm() {
    const [email, setEmail] = useState('');

    function handleEmailForm() {
        
        localStorage.setItem('email', email);
        console.log("Saved on localStorage: ", localStorage.getItem('email'));
    }
  return (
    <>
    <input type="email" value={email} placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)} /> 
    <button type="button" onClick={handleEmailForm}>Subscribe</button>

    </>
  );
}

export default EmailForm;
