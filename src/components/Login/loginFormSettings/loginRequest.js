import axios from "axios"
export const loginRequest = async (formValue,navigate)=>{

    try{
        /* navigate una vez hago login voy a inicio */
        /* Falta link de api */
        const loginResponse = await axios.post("",formValue)
    }catch(err){
        /* Manejar estado de error */
        console.log(err)
    }




}