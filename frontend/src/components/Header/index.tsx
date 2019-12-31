import React from 'react';

import { Banner, Title, JoinEventBtn } from './styles';

import HeaderBanner from '../HeaderBanner';

const Header: React.FC = () => {
    return (
        <>
            <HeaderBanner />
            <Banner>
                <Title>A feira já começou!</Title>
                <JoinEventBtn>Participar</JoinEventBtn> 
            </Banner>
        </>
        )
};

export default Header;
