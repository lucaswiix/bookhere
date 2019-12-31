import styled from 'styled-components';


export const Navbar = styled.div`
    flex-direction: row;
    height: 40px;
    background-color:#000;
    margin:0;
    padding: 0 20% 0 20%;
`;

export const LoginBtn = styled.button`
    border:none;
    height:30px;
    background-color:transparent;
    color:#fff;
    cursor: pointer;

    transition: 0.3s all linear;
    font-size: 14px;


    :focus {
        outline:none;
    }
    &:hover {
        color:#00FFFF;
        transition: 0.3s all linear;
    }

`;

export const SearchBar = styled.input.attrs(props => ({
    type: props.type,
    onClick: props.onClick,
    placeholder: props.placeholder,
}))`
    padding: 10px 2px 10px 10px;
    width: 80%;
    background-color:transparent;
    border: solid 1px #999;
    color:#fff;
    border-radius:3px;

    :focus{
        outline:none;
    }
`;

export const SearchBtn = styled.button`
    justify-content:center;
    margin-top:10px;
    cursor: pointer;
    align-items:center;
    margin-left:5px;
    color:#fff;
    border:none;
    background-color:transparent;

    &:hover {
        color:#00FFFF;
        transition: 0.3s all linear;
    }

    :focus {
        outline:none;
     }
`;


export const LeftSize = styled.div`
text-align:center;
width:33%;
align-items:center;
justify-content: center;
`;

export const CenterSize = styled.div`
text-align:center;
align-items:center;
width:33%;
`;

export const RightSize = styled.div`
width:33%;
text-align:center;

`;

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:100%;
    color:#fff;
`;

export const Logo = styled.span`
    margin:0;
    font-weight: bold;
    padding:0;
    color:#fff;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:18px;
`;

export const RightBar = styled.p`
    justify-content: right;
`;