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
    border: 1px solid var(--gray);
    border: 1px solid white;
    background:0;
    color:white;
    border-radius:5px;
    width:14rem;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
        outline:none;
        background:white;
        color:var(--primaryColor);
    }
}

`;

export default HeaderDiv;
