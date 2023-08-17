export const sendForm = async (data) =>

  await fetch('/api/hello', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })

export const enviarFormulario = (values) => {

  const templateParams = {
    name: values.name,
    email: values.email,
    message: values.message
  };

  emailjs.send('service_0856u8i', 'template_v38lo8r', templateParams, 'rTKVN0DZ7PkXs051A')
    .then((result) => {
      console.log(result);
      // setMensaje('Mensaje enviado correctamente');
      //Clean Form
      // formik.resetForm();
      // setTimeout(() => {
      //   setMensaje('')
      // }, 3000);
    }, (error) => {
      console.log(error.text);
    });
}


