import axios from "axios"
export const loginRequest = async (formValue,setError)=>{
    try{
        /* navigate una vez hago login voy a inicio */
        /* Falta link de api */
        const loginResponse = await axios.post("",formValue)
        /* Guardo la respuesta en localstroge o redux  */
        /* navigate("/") */
    }catch(err){
        /* Manejar estado de error */
        setError(true)
        setTimeout(()=>{
            setError(null)
        },5000 )
    }




}