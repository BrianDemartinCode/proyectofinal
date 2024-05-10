import { number, object, string } from "yup";

let userSchema = object({
    name: string().required("El nombre y el apellido es requerido"),
    phone: number("En este campo tendra que agregar solo numero").required().positive().integer(),
    email: string().email("el campo email debe tener formato email").required(),
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return{status: "success"}
    } catch (error) {
        return {status: "error", error: error.message}
    }
}

export default validateForm