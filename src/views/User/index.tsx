import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { githubSearchApiEndpoint, githubToken } from '../../config';
import axios from "axios";
import authConfig from '../../handlers/authConfig';
import UserSection from './userStyles';


const User: React.FC = () => {
    const params = useParams();
    const searchLogin = params.login;
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
        const config = await authConfig();
        const data = await axios.post(githubSearchApiEndpoint, {
            query: getUserQuery,
        },
            config
        )
            .then((response) => {
                console.log(response.data);
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
            })
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <UserSection>
            {error &&
                <span>
                    {error.message}
                </span>
            }
            {user &&
                <>
                    <img src={user.img} alt="User avatar" />
                    <h1>{user.name}</h1>
                    <span className='name'>{user.login}</span>
                    <div className='stats' >
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                className="icon">
                                <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                            </svg>
                            {user.followers} Fallowers
                        </span>
                        <span>
                            {user.following} Following
                        </span>
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                className="icon">
                                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
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
