import styled from 'styled-components';

const HeaderDiv = styled.header`
background-color:var(--primaryColor);
margin-bottom:1rem;
padding:0.8rem 0;
.container{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    display:flex;
    svg{
    fill:white;
}
}
input{
    padding: 0.5rem 1rem;
    border: 1px solid var(--lightGray);
    background:0;
    color:var(--lightGray);
    border-radius:5px;
    width:17rem;
    transition: all 0.2s ease-in-out;
    font-size: 16px;
    line-height: 24px;

    &:hover,
    &:focus {
        outline:none;
        background:white;
        color:var(--primaryColor);
    }
}

`;

export default HeaderDiv;
