import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeUser, logout, selectUser } from "../../redux/userSlice";
import { Form } from "../../styles/components/Login.js"

export function Login(){
    const [name, setName] = useState('')
    const { isLogged } = useSelector(selectUser)
    const dispatch = useDispatch()

    function handleLogin(e){
        e.preventDefault();
        dispatch(changeUser(name))
    }

    function handleLogout(e){
        e.preventDefault();
        dispatch(logout(name))
    }

    return(
        <Form>
            <input 
                onChange={(e)=> setName(e.target.value)} 
                type="text" 
                placeholder="Digite seu nome"
            />
            <button 
                onClick={isLogged ? handleLogout : handleLogin} 
                type="submit"
                style={isLogged ? {
                    backgroundColor:'rgb(244,33,46)'
                }:{}}
            >
                {isLogged ? 'SAIR' : 'ENTRAR'}
            </button>
        </Form>
    )
}