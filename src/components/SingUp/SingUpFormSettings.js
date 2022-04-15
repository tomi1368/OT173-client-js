import * as Yup from "yup";

export const __ERROR_MESSAGE__ =
	"Algo salió mal, por favor intenta de nuevo más tarde";
const __ERROR_FIRSTNAME_REQUIRED__ = "¿Cómo te llamas?";
const __ERROR_LASTNAME_REQUIRED__ = "Necesitamos saber tu apellido";
const __ERROR_EMAIL_REQUIRED__ = "Escribe tu correo por favor";
const __ERROR_EMAIL_INVALID__ = "El correo no es valido";
const __ERROR_PASSWORD_REQUIRED__ =
	"Necesitas una contraseña para poder ingresar";
const __ERROR_PASSWORD_MIN_LENGTH__ =
	"Tu contraseña debe tener al menos 6 caracteres";

export const __INITIAL_VALUES_SINGUP_FORM__ = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

export const SingUpFormSchema = Yup.object().shape({
	firstName: Yup.string().required(__ERROR_FIRSTNAME_REQUIRED__),
	lastName: Yup.string().required(__ERROR_LASTNAME_REQUIRED__),
	email: Yup.string()
		.required(__ERROR_EMAIL_REQUIRED__)
		.email(__ERROR_EMAIL_INVALID__),
	password: Yup.string()
		.required(__ERROR_PASSWORD_REQUIRED__)
		.min(6, __ERROR_PASSWORD_MIN_LENGTH__),
});
