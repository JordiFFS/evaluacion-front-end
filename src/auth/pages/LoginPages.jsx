import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginPages.css'
import { useLoginStore } from '../hooks';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



// Definición del esquema de validación
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Ingrese un correo electrónico válido')
        .required('Ingrese su correo electrónico'),
    password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Ingrese su contraseña'),
});

export const LoginPages = () => {

    const navigate = useNavigate();

    const {
        errorMessage,
        startLoginUser,
    } = useLoginStore();

    const startLogin = async ({ email = 'admin@gmail.com', password = '1Q2w3e4r' }) => {
        try {
            const response = await startLoginUser({ email, password });

            if (response?.token) {
                localStorage.setItem('token', response.token); // Guardar el token en localStorage

                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Bienvenido a la plataforma',
                    showConfirmButton: false,
                    timer: 1500 // Se cierra automáticamente en 1.5 segundos
                }).then(() => {
                    window.location.reload(); // Recargar la página después de mostrar el mensaje
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se recibió un token válido. Verifica tus credenciales.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
                text: 'Hubo un problema con la autenticación. Inténtalo de nuevo.',
            });
            console.error('Error en el inicio de sesión:', error);
        }
    };


    return (
        <div className="login">
            <div className="login-container">
                <div className="login-logo">
                    <img src="https://www.golden-companies.com/wp-content/uploads/2024/06/Web-Go-e1718631191371.png" alt="Logo de la aplicación" />
                </div>
                <div className="login-form">
                    <Formik
                        initialValues={{ email: 'admin2@gmial.com', password: '1q2w3e4r' }}
                        validationSchema={validationSchema}
                        onSubmit={startLogin}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group">
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                    />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>

                                <div className="form-group">
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                    />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>

                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                                <button type="submit" className="btn btn-primary">Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};