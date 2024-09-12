import { useState } from "react";

const Form = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setValues({ ...values, firstName: e.target.value })
    }

    const handleLastName = (e) => {
        setValues({ ...values, lastName: e.target.value })
    }

    const handleEmail = (e) => {
        setValues({ ...values, email: e.target.value })
    }

    const handleSubmit = () => {   
        setSubmitted(true);
    }

    return ( 
        <body>
            <form className="register-form">
                {submitted ? <div className="success-message">Success!! Thank you for subitting the form</div>: null }
                <input value={values.firstName}  type="text" placeholder="Enter FirstName here" onChange={handleFirstName} required/>
                <input value={values.lastName} type="text" placeholder="Enter Lastname here" onChange={handleLastName} required/>
                <input value={values.email} type="email" placeholder="Enter email here" onChange={handleEmail} required/>
                <input type="submit" value="Register" onClick={handleSubmit}/>
            </form>
        </body>
     );
}
 
export default Form;