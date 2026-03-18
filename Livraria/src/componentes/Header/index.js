import styled from 'styled-components';
import IconesHeader from '../../componentes/IconesHeader';
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>  
    )
}

export default Header