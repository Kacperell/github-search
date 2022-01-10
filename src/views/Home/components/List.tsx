import React from 'react'
import { Link } from "react-router-dom";

interface Props {
    results: Array<any>,

}

const List: React.FC<Props> = ({ results }) => {
    const renderList = (): JSX.Element[] => {
        return results.map((item, i) => {
            return (
                <li key={i} >
                    <div className="imgBox">
                        {item.node.avatarUrl ?
                            <>
                                <img className='avatar' src={item.node.avatarUrl} alt="Avatar" />
                            </> :

                            <>
                                <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20"
                                    className="repo-icon">
                                    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                </svg>
                            </>
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

                        <span className='info__bio'>
                            {item.node.bio && item.node.bio}
                        </span>

                        <span className='info__additionalInformation'>
                            {item.node.avatarUrl ?
                                <>
                                    {item.node.location}
                                </> :
                                <>
                                    <span>
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16"
                                            version="1.1" width="16"
                                            className="starIcon"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
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
