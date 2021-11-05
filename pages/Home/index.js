import { Title, Container } from "../../styles/pages/Home.js"

import { Login } from "../../components/Login"
import { User } from "../../components/User/index.js"

export function Home(){
    return(
        <Container>
            <Title>TESTANDO REDUX</Title>
            <Login />
            <User />
        </Container>
    )
}