import styled from 'styled-components';

const HomeSection = styled.section`
display: flex;
flex-direction: column;
.resultCount{ 
    color:var(--black);
    margin-top:20px;
    margin-bottom:20px;
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
    
}
.resultsList{
      
        li{
            display:flex;
            list-style:none;
            padding-top:20px;
            padding-bottom:20px;
            border-top:1px solid var(--listItemBorderColor);
            .imgBox{
                margin-right:10.5px;
                .avatar,.repo-icon{
                    width:30px;
                    max-width:100%;
                    fill:var(--gray);
                    margin-top:0.5rem;
            }
            .avatar{
                border-radius:50%;
             }
            }


            .info{
                display:flex;
                flex-direction:column;
                max-width:75%;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                &__title{
                    color: #166CD7;
                    margin-bottom:5px;
                    a{
                        color:#0969da;
                    }
                }
                &__secondary{
                    color:var(--darkestGray);
       
                }
                &__bio{
                    color:var(--primaryColor);
                    font-size: 14px;
                    line-height: 18px;
                    margin-top:20px;
                }
                &__additionalInformation{
                    margin-top:15px;
                    display:flex;
                    align-items:center;;
                    font-size: 12px;
                    line-height: 16px;
                    color:var(--darkestGray);
                    .starIcon{
                        fill: var(--gray);
                        margin-right: 0.5rem;
                    }
                    span{
                        margin-right:1.5rem;
                        display:flex;
                        align-items:center;
                    }
                  .primaryLanguage-circle{
                      width:1rem;
                      height:1rem;
                      border-radius:50px;
                      margin-right:0.5rem;
                  }
                }

            }
           
        }
    }
`;

export default HomeSection;
