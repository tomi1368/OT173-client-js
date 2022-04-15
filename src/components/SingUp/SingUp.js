import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
	SingUpFormSchema,
	__ERROR_MESSAGE__,
	__INITIAL_VALUES_SINGUP_FORM__,
} from "./SingUpFormSettings";

const SingUp = () => {
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (formData) => {
		const { firstName, lastName, email, password } = formData;

		try {
			setErrorMessage("");
			// Add here the Fetch logic
		} catch (err) {
			setErrorMessage(__ERROR_MESSAGE__);
		}
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
					<ErrorMessage name="firstName">
						{(error) => <div>{error}</div>}
					</ErrorMessage>

					<Field type="text" name="lastName" placeholder="Apellido" />
					<ErrorMessage name="lastName">
						{(error) => <div>{error}</div>}
					</ErrorMessage>

					<Field type="email" name="email" placeholder="Email" />
					<ErrorMessage name="email">
						{(error) => <div>{error}</div>}
					</ErrorMessage>

					<Field type="password" name="password" placeholder="Contraseña" />
					<ErrorMessage name="password">
						{(error) => <div>{error}</div>}
					</ErrorMessage>

					{errorMessage && <div>{errorMessage}</div>}

					<button type="submit" disabled={isSubmitting}>
						Enviar
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SingUp;
