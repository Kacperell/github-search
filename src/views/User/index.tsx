import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { githubSearchApiEndpoint } from '../../config';
import axios from "axios";
import authConfig from '../../handlers/authConfig';
import UserSection from './userStyles';

interface userInterface {
    login: string
    name: string
    img: string
    followers: number
    following: number
    starredRepositories: number
}

interface errorInterface {
    message: string;
    type: string
}


const User: React.FC = () => {
    const params = useParams();
    const searchLogin = params.login;
    const [error, setError] = useState<errorInterface | null>(null);
    const [user, setUser] = useState<userInterface | null>(null);
    const getUserQuery = `
                query{
                    user(login:"${searchLogin}") {
                    login
                    avatarUrl
                    name
                    followers {
                    totalCount 
                    }
                    following{
                    totalCount 
                    }
                    starredRepositories {
                        totalCount
                    }
                }
                }
    `
    const getUser = async () => {
        const config = authConfig();
        await axios.post(githubSearchApiEndpoint, {
            query: getUserQuery,
        },
            config
        )
            .then((response) => {
                if (response.data.errors) {
                    setError(response.data.errors[0]);
                    return;
                } else {
                    const data = response.data.data.user;
                    setUser(
                        {
                            login: data.login,
                            name: data.name ? data.name : "",
                            img: data.avatarUrl,
                            followers: data.followers.totalCount,
                            following: data.following.totalCount,
                            starredRepositories: data.starredRepositories.totalCount
                        },
                    )

                }
            })
            .catch((error) => {
                console.log('error', error);
                setError(error);
            })
    }
    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <UserSection>
            {error &&
                <span>
                    {error.message}
                </span>
            }
            {!error && !user &&
                <span>
                    Loading...
                </span>
            }
            {user &&
                <>
                    <img src={user.img} alt="User avatar" />
                    <h1>{user.name}</h1>
                    <span className='nick'>{user.login}</span>
                    <div className='stats' >
                        <span>
                            <svg className="icon" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.20008 6.14683C8.5558 5.83892 8.84111 5.45809 9.03666 5.03018C9.23221 4.60227 9.33342 4.1373 9.33342 3.66683C9.33342 2.78277 8.98223 1.93493 8.3571 1.30981C7.73198 0.684686 6.88414 0.333496 6.00008 0.333496C5.11603 0.333496 4.26818 0.684686 3.64306 1.30981C3.01794 1.93493 2.66675 2.78277 2.66675 3.66683C2.66674 4.1373 2.76795 4.60227 2.9635 5.03018C3.15905 5.45809 3.44436 5.83892 3.80008 6.14683C2.86684 6.56942 2.07506 7.25185 1.5194 8.11253C0.963745 8.9732 0.667729 9.9757 0.666748 11.0002C0.666748 11.177 0.736986 11.3465 0.86201 11.4716C0.987034 11.5966 1.1566 11.6668 1.33341 11.6668C1.51023 11.6668 1.6798 11.5966 1.80482 11.4716C1.92984 11.3465 2.00008 11.177 2.00008 11.0002C2.00008 9.9393 2.42151 8.92188 3.17165 8.17174C3.9218 7.42159 4.93922 7.00016 6.00008 7.00016C7.06095 7.00016 8.07836 7.42159 8.82851 8.17174C9.57865 8.92188 10.0001 9.9393 10.0001 11.0002C10.0001 11.177 10.0703 11.3465 10.1953 11.4716C10.3204 11.5966 10.4899 11.6668 10.6667 11.6668C10.8436 11.6668 11.0131 11.5966 11.1382 11.4716C11.2632 11.3465 11.3334 11.177 11.3334 11.0002C11.3324 9.9757 11.0364 8.9732 10.4808 8.11253C9.92511 7.25185 9.13332 6.56942 8.20008 6.14683ZM6.00008 5.66683C5.60452 5.66683 5.21784 5.54953 4.88894 5.32977C4.56004 5.11001 4.3037 4.79765 4.15232 4.4322C4.00095 4.06674 3.96134 3.66461 4.03851 3.27665C4.11568 2.88869 4.30616 2.53232 4.58587 2.25262C4.86557 1.97291 5.22194 1.78243 5.6099 1.70526C5.99786 1.62809 6.4 1.6677 6.76545 1.81907C7.1309 1.97045 7.44326 2.22679 7.66302 2.55569C7.88278 2.88459 8.00008 3.27127 8.00008 3.66683C8.00008 4.19726 7.78937 4.70597 7.4143 5.08104C7.03922 5.45612 6.53051 5.66683 6.00008 5.66683ZM12.4934 5.88016C12.9201 5.39972 13.1988 4.8062 13.2959 4.17106C13.3931 3.53591 13.3047 2.88621 13.0413 2.30016C12.7778 1.71411 12.3506 1.21669 11.8111 0.867778C11.2715 0.518863 10.6426 0.333324 10.0001 0.333496C9.82327 0.333496 9.6537 0.403734 9.52868 0.528758C9.40365 0.653783 9.33342 0.823352 9.33342 1.00016C9.33342 1.17697 9.40365 1.34654 9.52868 1.47157C9.6537 1.59659 9.82327 1.66683 10.0001 1.66683C10.5305 1.66683 11.0392 1.87754 11.4143 2.25262C11.7894 2.62769 12.0001 3.1364 12.0001 3.66683C11.9991 4.01699 11.9063 4.36076 11.7308 4.66378C11.5553 4.96679 11.3033 5.21842 11.0001 5.3935C10.9012 5.45051 10.8187 5.53194 10.7603 5.62999C10.702 5.72804 10.6697 5.83943 10.6667 5.9535C10.664 6.06667 10.69 6.17869 10.7425 6.279C10.795 6.37931 10.8722 6.4646 10.9667 6.52683L11.2267 6.70016L11.3134 6.74683C12.117 7.12797 12.795 7.73082 13.2674 8.48437C13.7398 9.23792 13.9871 10.1108 13.9801 11.0002C13.9801 11.177 14.0503 11.3465 14.1753 11.4716C14.3004 11.5966 14.4699 11.6668 14.6467 11.6668C14.8236 11.6668 14.9931 11.5966 15.1182 11.4716C15.2432 11.3465 15.3134 11.177 15.3134 11.0002C15.3189 9.97712 15.0626 8.96967 14.5691 8.07354C14.0755 7.17741 13.361 6.42237 12.4934 5.88016Z" fill="#6F7781" />
                            </svg>
                            {user.followers} Fallowers
                        </span>
                        <span>
                            {user.following} Following
                        </span>
                        <span>
                            <svg className="icon" width="16" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00014 2.26L9.38014 5.05L9.61014 5.55L10.1101 5.625L13.1901 6.07L11.0001 8.22L10.6251 8.585L10.7151 9.085L11.2401 12.15L8.48513 10.705L8.00014 10.5L7.53513 10.745L4.78013 12.17L5.28014 9.105L5.37014 8.605L5.00014 8.22L2.79014 6.045L5.87014 5.6L6.37014 5.525L6.60014 5.025L8.00014 2.26ZM8.00014 1.28686e-06L5.72514 4.61L0.640136 5.345L4.32014 8.935L3.45013 14L8.00013 11.61L12.5501 14L11.6801 8.935L15.3601 5.35L10.2751 4.61L8.00014 1.28686e-06Z" fill="#6F7781" />
                            </svg>
                            {user.starredRepositories}
                        </span>

                    </div>
                </>
            }
        </UserSection >
    )
}

export default User
