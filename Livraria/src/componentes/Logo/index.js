import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;
`

const LogoContainerImage = styled.img`
    margin-right: 50px;
    margin: 10px;
    
`

function Logo(){
    return (
        <LogoContainer>
          <LogoContainerImage 
            src={logo} 
            alt='logo' 
          />
          <p><strong>Matheus</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo;