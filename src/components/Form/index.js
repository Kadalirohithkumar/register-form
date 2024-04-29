import React, { useState, useEffect } from 'react';
import './index.css';

function Form() {
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    city: "",
    workStatus: ""
  });
  const [registerClicked, setRegisterClicked] = useState(false);

  const [formValues, setFormValues] = useState([]);
  const suggestedCities = ["Hyderabad", "New Delhi", "Bengaluru", "Mumbai", "Pune", "Chennai","gurugram","Noida","Ahmedabad","Kolkata"];
  const [showSuggestions, setShowSuggestions] = useState(false);
  const workStatusOptions = ["I'm a Experienced ", "I'm a Fresher"];

  const handleCityChange = (value) => {
    setInitialValues({ ...initialValues, city: value });
    setShowSuggestions(false);
  };

  const handleSelectCity = (city) => {
    setInitialValues({ ...initialValues, city });
    setShowSuggestions(false);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleWorkStatusChange = (status) => {
    setInitialValues({ ...initialValues, workStatus: status });
  };

  const submitForm = () => {
    setFormValues(prevFormValues => [...prevFormValues, initialValues]);
    setRegisterClicked(true); 
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div className="form">
        <h2>Create Your Noukari Profile</h2>
        <p style={{color:'gray'}}>Search & apply to jobs from India's No.1 Job Site</p>
      <div className='input-field'>
        Full Name:
        <input
            className='input-bar'
            placeholder='What is Your name?'
          value={initialValues.fullName}
          onChange={(e) =>
            setInitialValues({ ...initialValues, fullName: e.target.value })
          }
        />
      </div>
      <div className='input-field'>
        Email:
        <input
        className='input-bar'
         placeholder='Tell us your Email ID'
          value={initialValues.email}
          onChange={(e) =>
            setInitialValues({ ...initialValues, email: e.target.value })
          }
        />
      </div>
      <div className='input-field'>
        Password:
        <input
        className='input-bar'
        placeholder='(Minimun 6 characters)'
          type="password"
          value={initialValues.password}
          onChange={(e) =>
            setInitialValues({ ...initialValues, password: e.target.value })
          }
        />
      </div>
      <div className='input-field'>
        Mobile Number:
        <input
        className='input-bar'
        placeholder='Enter you mobile number'
          type="tel"
          value={initialValues.mobileNumber}
          onChange={(e) =>
            setInitialValues({ ...initialValues, mobileNumber: e.target.value })
          }
        />
      </div>
      <div className='work-status'>
        <h4 style={{fontWeight:"500"}}>Work status:</h4>
      <div className="work-status-options">
        
        {workStatusOptions.map((status, index) => (
          <div key={index} className={`work-status-option ${initialValues.workStatus === status ? 'selected' : ''}`} onClick={() => handleWorkStatusChange(status)}>
            {status}
          </div>
        ))}
      </div>
      </div>
      <div className='input-field'>
        Current City:
        <input
        className='input-bar'
        placeholder='Mention the city you live in'
          value={initialValues.city}
          onChange={(e) => handleCityChange(e.target.value)}
          onFocus={() => toggleSuggestions()}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <div className='suggestions-parent'>
        Suggestions:
        <div className="suggestions">
          {suggestedCities.map((city, index) => (
            <div className='suggested-city' key={index} onClick={() => handleSelectCity(city)}>
              {city}
            </div>
          ))}
        </div>
        </div>
        <div style={{display:'flex'}}> 
            <input type='checkbox' /><p style={{color:'gray',fontWeight:'500'}}>Send me important updates & and promotions via  SMS, Email and WhatsApp</p>
        </div>
      </div>
      <button className={`reg-button ${registerClicked ? '' : 'clicked'}`} onClick={submitForm}>Register Now</button>    </div>
  );
}

export default Form;
