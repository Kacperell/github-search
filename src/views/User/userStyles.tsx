import styled from 'styled-components';

const UserSection = styled.section`
text-align:center;
  img{
    width: 296px;
    border-radius: 50%;
    max-width:100%
      
  }
  h1{
    font-size: 26px;
    line-height: 32px;
    font-weight:600;
    color: var(--primaryColor);
    margin-top:16px;
  }
  .nick{
    color:var(--darkestGray);
    font-size: 20px;
    line-height: 32px;
    margin-bottom:13px;
  }
.stats{
    color:var(--darkestGray);
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    font-size: 12px;
    line-height: 16px;
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
