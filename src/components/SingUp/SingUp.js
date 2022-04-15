import { Formik, Form, Field } from "formik";

const SingUp = () => {
	const handleSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
		>
			{(props) => (
				<Form>
					<Field type="text" name="firstName" placeholder="Nombre" />
					<Field type="text" name="lastName" placeholder="Apellido" />
					<Field type="email" name="email" placeholder="Email" />
					<Field type="password" name="password" placeholder="Contraseña" />

					<button type="submit">Enviar</button>
				</Form>
			)}
		</Formik>
	);
};

export default SingUp;
