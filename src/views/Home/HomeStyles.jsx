import styled from 'styled-components';

const HomeSection = styled.section`

.resultCount{
    font-size:2rem;
    font-weight:600;
  
}
.resultsList{
      
        li{
            display:flex;
            list-style:none;
            padding-top:1.5rem;
            padding-bottom:1.5rem;
            border-top:1px solid var(--lightGray);
            .imgBox{
                max-width:25%;
                margin-right:2%;
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
                &__title{
                    color:#0969da;
                    font-weight:600;
                    font-size:1.5rem;
                    a{
                        color:#0969da;
                    }
                }
                &__secondary{
                    color:var(--gray);
                    margin-bottom:1rem;
                    font-weight:600;
                }
                &__bio{
                    color:var(--black);
                    font-weight:600;
                    margin-bottom:0.5rem;
                }
                &__additionalInformation{
                    display:flex;
                    align-items:center;;
                    color:var(--gray);
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
