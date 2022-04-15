import { Formik, Form, Field } from "formik";

import {
	SingUpFormSchema,
	__INITIAL_VALUES_SINGUP_FORM__,
} from "./SingUpFormSettings";

const SingUp = () => {
	const handleSubmit = async (formData) => {
		const { firstName, lastName, email, password } = formData;

		try {
			console.log(firstName, lastName, email, password);
			// Add here the Fetch logic
		} catch (err) {}
	};

	return (
		<Formik
			initialValues={__INITIAL_VALUES_SINGUP_FORM__}
			validationSchema={SingUpFormSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="text" name="firstName" placeholder="Nombre" />
					<Field type="text" name="lastName" placeholder="Apellido" />
					<Field type="email" name="email" placeholder="Email" />
					<Field type="password" name="password" placeholder="Contraseña" />

					<button type="submit" disabled={isSubmitting}>
						Enviar
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SingUp;
