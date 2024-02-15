import { useFormik } from 'formik';
import { signUpSchema } from './Yup_Schema.jsx';

import './My_style.css'
// Define the initial values for the form fields
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}
// Create a functional component named Form
const Form = () => {

    // Destructure values, errors, touched, handleBlur, handleChange, and handleSubmit from the useFormik hook
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        // Pass the initial values to the form
        initialValues: initialValues,

        // Specify a validation schema for the form using signUpSchema
        validationSchema: signUpSchema,

        // Define the onSubmit callback function, which will be executed when the form is submitted
        onSubmit: (values, action) => {

            // Log the form values to the console
            console.log(values);

            // Reset the form using the resetForm method provided by the useFormik hook
            action.resetForm()

        }
    });

    // Return the JSX representing the form
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="contact_form-div">
                        <label htmlFor="">Name</label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.name && touched.name ? (<p>{errors.name}</p>) : null}
                    <div className="contact_form-div">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                    <div className="contact_form-div">
                        <label htmlFor="">Password </label>
                        <input
                            type="password"
                            autoComplete="off"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                    <div className="contact_form-div">
                        <label htmlFor="">Confirm Password </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="confirm_password"
                            id='conirm_password'
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form


