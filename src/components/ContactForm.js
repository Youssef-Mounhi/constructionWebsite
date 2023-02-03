import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

const ContactForm = (props)=>{
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const styles = {
        field : "rounded-sm border-gray-300 transition focus:shadow-md focus:border-primary focus:ring-primary sm:text-sm",
        label : "text-sm font-medium"
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const ContactSchema = Yup.object().shape({
        firstname: Yup.string()
          .required('Required'),
        lastname: Yup.string()
          .required('Required'),
        email: Yup.string().email('Please provide a valid email').required('Required'),
        phone: Yup.string().matches(phoneRegExp, 'Please provide a valide phone number').required('required'),
        message: Yup.string().required('Required')
      });

    return(
        <Formik
            initialValues={{ firstname: '', lastname: '', email: '', phone: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                console.log(values)
                fetch("/contact",{
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({
                        "form-name": "contact",
                        ...values,
                        }),
                })
                .then(()=>{
                    setSubmitting(false);
                    setSuccess(true);
                })
                .catch(err=>setError(true));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true"
                    className="flex flex-col gap-4 text-gray-700"
                >
                    <input type="hidden" name="contact" value="contact" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-0.5'>
                            <label htmlFor='firstname' className={styles.label}>First name</label>
                            <input
                                type="text"
                                name="firstname"
                                placeholder='Your first name'
                                onChange={handleChange}
                                value={values.firstname}
                                className={styles.field}
                            />
                            <span className='text-red-600 text-sm'>{errors.firstname && touched.firstname && errors.firstname}</span>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <label htmlFor='lastname' className={styles.label}>Last name</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder='Your last name'
                                onChange={handleChange}
                                value={values.lastname}
                                className={styles.field}
                            />
                            <span className='text-red-600 text-sm'>{errors.lastname && touched.lastname && errors.lastname}</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-0.5'>
                            <label htmlFor='email' className={styles.label}>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Your email'
                                onChange={handleChange}
                                value={values.email}
                                className={styles.field}
                            />
                            <span className='text-red-600 text-sm'>{errors.email && touched.email && errors.email}</span>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <label htmlFor='phone' className={styles.label}>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Your phone number'
                                onChange={handleChange}
                                value={values.phone}
                                className={styles.field}
                            />
                            <span className='text-red-600 text-sm'>{errors.phone && touched.phone && errors.phone}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor='message' className={styles.label}>Message</label>
                        <textarea
                            name="message"
                            placeholder='Tell us about your project briefly'
                            onChange={handleChange}
                            value={values.message}
                            className={`${styles.field} h-36`}
                        />
                        <span className='text-red-600 text-sm'>{errors.message && touched.message && errors.message}</span>
                    </div>
                    
                    {success ? <span className='text-green-500 text-sm'>We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!</span> : null}
                    {error ? <span className='text-red-600 text-sm'>An unexpected error has occured. Please contact us using phone or email. Thank you.</span> : null}
                    <button type="submit" disabled={isSubmitting} className="btn-primary mt-6">
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}

export default ContactForm;