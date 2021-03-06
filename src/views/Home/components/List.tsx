import React from 'react'
import { Link } from "react-router-dom";
import { listItemInterface } from '../index';
interface Props {
    results: Array<listItemInterface>,

}

const List: React.FC<Props> = ({ results }) => {
    const renderList = (): JSX.Element[] => {
        return results.map((item, i) => {
            return (
                <li key={i} >
                    <div className="imgBox">
                        {item.node.avatarUrl ?
                            <img className='avatar' src={item.node.avatarUrl} alt="Avatar" />
                            :
                            <svg width="20" height="20" viewBox="0 0 16 18" className="repo-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.16667 17.3252H13C14.005 17.3252 15.5 16.6594 15.5 14.8252L15.5 3.15853C15.5 1.32436 14.005 0.658528 13 0.658528L0.5 0.658528V2.32519L12.99 2.32519C13.375 2.33519 13.8333 2.48769 13.8333 3.15853C13.8333 3.24269 13.8258 3.3177 13.8133 3.38603C13.72 3.8652 13.3275 3.98353 12.9908 3.99186L1.33333 3.99186C1.31833 3.99186 1.3075 3.99936 1.2925 4.00019H0.5L0.5 15.6585C0.5 16.5777 1.2475 17.3252 2.16667 17.3252ZM2.16667 5.65853L13.8333 5.65853L13.8333 14.8252C13.8333 15.4969 13.375 15.6485 13 15.6585L7.16667 15.6585L7.16667 9.82519L5.5 10.6585L3.83333 9.82519L3.83333 15.6585H2.16667L2.16667 5.65853Z" fill="#6F7781" />
                            </svg>
                        }
                    </div>

                    <div className="info">
                        <span className='info__title'>
                            {item.node.avatarUrl ?
                                <>
                                    <Link to={'user/' + item.node.login} >
                                        {item.node.login}
                                    </Link>
                                </> :
                                <>

                                    {item.node.owner &&
                                        <>  {item.node.owner.login} / </>
                                    }
                                    {item.node.name}

                                </>
                            }
                        </span>
                        <span className='info__secondary'>
                            {item.node.avatarUrl ?
                                <>
                                    {item.node.name}
                                </> :
                                <>
                                    {item.node.owner &&
                                        item.node.description
                                    }

                                </>
                            }
                        </span>


                        {item.node.bio &&
                            <>
                                <span className='info__bio'>
                                    {item.node.bio}
                                </span>
                            </>}



                        <span className='info__additionalInformation'>
                            {item.node.avatarUrl ?
                                <>
                                    {item.node.location}
                                </> :
                                <>
                                    <span>

                                        <svg className="starIcon" width="16" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00014 2.26L9.38014 5.05L9.61014 5.55L10.1101 5.625L13.1901 6.07L11.0001 8.22L10.6251 8.585L10.7151 9.085L11.2401 12.15L8.48513 10.705L8.00014 10.5L7.53513 10.745L4.78013 12.17L5.28014 9.105L5.37014 8.605L5.00014 8.22L2.79014 6.045L5.87014 5.6L6.37014 5.525L6.60014 5.025L8.00014 2.26ZM8.00014 1.28686e-06L5.72514 4.61L0.640136 5.345L4.32014 8.935L3.45013 14L8.00013 11.61L12.5501 14L11.6801 8.935L15.3601 5.35L10.2751 4.61L8.00014 1.28686e-06Z" fill="#6F7781" />
                                        </svg>


                                        {item.node.stargazerCount}
                                    </span>

                                    {item.node.primaryLanguage &&
                                        <span className='primaryLanguage'>
                                            <div
                                                style={{ backgroundColor: item.node.primaryLanguage.color }}
                                                className='primaryLanguage-circle'></div>     {item.node.primaryLanguage.name}
                                        </span>
                                    }
                                    <span>
                                        {item.node.updatedAt &&
                                            <>
                                                {/* we take the date without the time zone */}
                                                Updated: {(item.node.updatedAt).slice(0, 10)}
                                            </>
                                        }
                                    </span>


                                </>
                            }
                        </span>

                    </div>




                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
