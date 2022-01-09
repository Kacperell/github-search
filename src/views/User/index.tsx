import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { githubSearchApiEndpoint, githubToken } from '../../config';
import axios from "axios";
import authConfig from '../../handlers/authConfig';
import UserSection from './userStyles';
const User: React.FC = () => {
    const params = useParams();
    const login = params.login;
    interface userInterface {
        login: string
        name: string
        img: string
        followers: number
        following: number
    }

    interface errorInterface {
        message: string;
        type: string
    }
    const [error, setError] = useState<errorInterface | null>(null);
    const [user, setUser] = useState<userInterface | null>(null);
    const getUserQuery = `
    query{
        user(login:"${login}") {
          login
          avatarUrl
          name
          followers {
           totalCount 
        }
          following{
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
                    <h1>{user.name}</h1>
                    <h2>{user.login}</h2>
                    <div ></div>
                </>
            }

        </UserSection>
    )
}

export default User
