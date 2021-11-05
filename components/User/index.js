import { useSelector } from "react-redux"
import { selectUser } from "../../redux/userSlice"
import { Content } from "../../styles/components/User"

export function User(){
    const { name } = useSelector(selectUser)

    return(
        <Content>
            <h1>Bem vindo, {name}!</h1>
        </Content>
    )
}