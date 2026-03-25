import styled from 'styled-components';
import IconesHeader from '../../componentes/IconesHeader';
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/> 
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
         </HeaderContainer>  
    )
}

export default Header