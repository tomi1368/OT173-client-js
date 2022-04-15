import * as Yup from "yup";

export const __INITIAL_VALUES_SINGUP_FORM__ = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

export const SingUpFormSchema = Yup.object().shape({
	firstName: Yup.string().required("¿Cómo te llamas?"),
	lastName: Yup.string().required("Necesitamos saber tu apellido"),
	email: Yup.string()
		.required("Escribe tu correo por favor")
		.email("El correo no es valido"),
	password: Yup.string()
		.required("Necesitas una contraseña para poder ingresar")
		.min(6, "Tu contraseña debe tener al menos 6 caracteres"),
});
