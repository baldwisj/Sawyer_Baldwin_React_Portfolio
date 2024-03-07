import { useState } from 'react';


// Here we import a helper function that will check if the email is valid
import  {validateEmail}  from '../../helpers/helpers.js';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name and Message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputValue = target.value;
    const inputName = target.name;

    if (!inputValue) {
      setErrorMessage(`${inputName} is required`);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    
    if (!validateEmail(email) || !email) {
      setErrorMessage('Email is invalid');
      
      return;
      
    }
    if (!name) {
      setErrorMessage(`Please Enter a Name`);
      return;
    }
    if (!message) {
        setErrorMessage(`Please Enter a Message`);
        return;
      }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className=" text-center w-100">
      <p>Hello, Please fill out this contact form if you would like to reach out to me regarding a position or interview. Thank you!</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Email"
        />
        </div>
        <div className="form-group">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        </div>
        <div className="form-group">
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Message"
        />
        </div> 
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;