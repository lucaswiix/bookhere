import styled from 'styled-components';

export const Banner = styled.div`
    height: 300px;
    display:flex;
    margin:0;
    
    width:100%;
    background-size: cover;
    text-align:center;
    align-items:center;
    justify-content:center;
    background: rgba(34,116,165,0.5);
    position: relative;

    flex-direction:column;

&::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("https://eslteenstuff.com/wp-content/uploads/2014/02/banner-books.jpg")  no-repeat;
    background-size: cover;
    opacity: .4;
    content: "";
    z-index: -1;
}

`;

export const JoinEventBtn = styled.button`
margin-top:15px;
    border:none;
    border-radius: 5px;
    height: 40px;
    width:150px;
    color:#fff;
    cursor:pointer;
    background-color:rgba(0,0,0,0.7);
    transition: all 0.3s linear;
    font-size:18px;
    text-transform:uppercase;

    :focus {
        outline:none;
    }
    &:hover {
        background-color:rgba(0,0,0,1);
        transition: all 0.3s linear;
    }
`;

export const Title = styled.h1`
    opacity: 1;
    color:#fff;
    margin:0;
    font-size:80px;
`;