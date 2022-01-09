import styled from 'styled-components';

const UserSection = styled.section`
text-align:center;
  img{
      width: 300px;
      border-radius: 50%;
      max-width:100%
      
  }
  h1{
      font-size:2.5rem;
      font-weight:600;
  }
  .name{
      font-size:2rem;
      color:var(--gray);
      font-weight: 300;
  }
.stats{
    color:var(--gray);
    display:flex;
    justify-content:center;
    span{
        margin:1rem;
        display:flex;
        align-items:center;
    }
    img{
        width:15px;
        height:auto;
     
    }
    .icon{
        fill:var(--gray);
        margin-right:0.5rem;
      
    }
}
`;

export default UserSection;
