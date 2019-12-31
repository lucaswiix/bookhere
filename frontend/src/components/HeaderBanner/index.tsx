import React from 'react';

import { Navbar, Container, Logo, RightSize, CenterSize, LeftSize, LoginBtn, SearchBar, SearchBtn } from './styles';

import { FaSearch } from 'react-icons/fa';

const HeaderBanner :React.FC = () => {

    async function HandleSearch(){
        console.log('search');
    }

    return (
    <Navbar>
        <Container>
        <LeftSize>
            {/* <SearchBar type="text" placeholder="Search" onClick={HandleSearch} />  */}
            <SearchBtn><FaSearch /></SearchBtn>
        </LeftSize>
        <CenterSize>
            <Logo>BookHere</Logo>
        </CenterSize>
        <RightSize>
            <LoginBtn>
                Login
            </LoginBtn>
        </RightSize>
        </Container>
    </Navbar>
    );
}

export default HeaderBanner;
