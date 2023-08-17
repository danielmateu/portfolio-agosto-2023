
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Alerta } from './ui/Alerta'

export const Form = () => {

    const [mensaje, setMensaje] = useState('')
    // const emailJsKey = process.env.EMAIL_JS_KEY;
    const emailJsKey = 'rTKVN0DZ7PkXs051A';
    emailjs.init(emailJsKey);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Debes introducir el nombre'),
            email: Yup.string().email('El email no es válido').required('Debes introducir el email'),
            message: Yup.string().required('Debes introducir el mensaje')
        }),
        onSubmit: (values) => {
            // console.log(values)
            enviarFormulario(values)
        }
    })

    const enviarFormulario = (values) => {

        const templateParams = {
            name: values.name,
            email: values.email,
            message: values.message
        };

        emailjs.send('service_0856u8i', 'template_v38lo8r', templateParams, 'rTKVN0DZ7PkXs051A')
            .then((result) => {
                console.log(result);
                setMensaje('Mensaje enviado correctamente');
                //Clean Form
                formik.resetForm();
                setTimeout(() => {
                    setMensaje('')
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="flex flex-col gap-2 px-10 pt-80 sm:py-28  min-h-screen bg-fixed justify-center items-center " id='contact'>
            <h3 className='mb-4 px-20 text-4xl text-gray-800 text-center dark:text-gray-100 font-semibold'>¿Quieres contactar?</h3>

            <form
                onSubmit={formik.handleSubmit}
                className='w-full bg-white dark:bg-gray-600 rounded hover:shadow-lg p-10 m-6 transition-all md:w-3/6 ' action="">
                <div className="mb-4 flex flex-col ">
                    <label htmlFor="name" className='dark:text-gray-300'>Nombre</label>
                    <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        id='name'
                        className='p-4 bg-slate-100 dark:bg-slate-300 rounded appearance-none focus:outline-none'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.name && formik.errors.name ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.name}</p>
                            </div>
                        ) : null
                    }
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="email" className='dark:text-gray-300'>Email</label>
                    <input
                        type="email"
                        placeholder="Introduce tu email"
                        id='email'
                        className='p-4 bg-slate-100 dark:bg-slate-300 rounded appearance-none focus:outline-none'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null
                    }
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="message" className='dark:text-gray-300'>Qué quieres saber?</label>
                    <textarea
                        type="text"
                        placeholder="Dime lo que estás buscando... 😉"
                        id='message'
                        className='p-4 bg-slate-100 dark:bg-slate-300 rounded appearance-none focus:outline-none'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.message && formik.errors.message ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.message}</p>
                            </div>
                        ) : null
                    }
                </div>

                <input type="submit" value='🚀' className="w-full bg-sky-200 hover:bg-sky-300 transition-colors py-4 rounded my-2" />
                {mensaje && <Alerta />}
            </form>
        </div>
    )
}

