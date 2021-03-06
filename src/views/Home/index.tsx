import React, { useEffect, useState } from 'react'
import { useSearchContext } from '../../contexts/SearchContext';
import useDebounce from "../../hooks/useDebounce";
import { githubSearchApiEndpoint } from '../../config';
import axios from "axios";
import authConfig from '../../handlers/authConfig';
import HomeSection from './HomeStyles';
import List from './components/List';

// At the beginning we do any search to fill the list
const defaultSearchOnStart = "React";

export interface listItemInterface {
  // TODO, it will be better to separate it for two interactions (repo, user) extendsed from itemResult with type enum ('repo', 'user')
  node: {
    name: string
    avatarUrl: string
    login: string
    id: string;
    licenseInfo: {
      name: string
    }
    owner: {
      login: string
    };
    description: string
    primaryLanguage: {
      color: string
      name: string
    }
    updatedAt: string
    bio: string
    location: any
    stargazerCount: number
  }
}

const Home: React.FC = () => {
  const { searchText } = useSearchContext();
  const debouncedSearch = useDebounce(searchText, 500);
  interface errorInterface {
    message: string;
    type: string
  }
  const [error, setError] = useState<errorInterface | null>(null);
  const [resultsCount, setResultsCount] = useState<number | null>(null);
  const [resultsList, setResultsList] = useState<listItemInterface[]>([]);

  // for the sake of simplicity, without pagination, we want max 40 results
  const searchQuery = `query {
    users:search(type:USER,query:"${searchText ? searchText : defaultSearchOnStart}",first:25) {
         userCount   
      edges {
           node {
             ... on User {
               name
              login
               id
              avatarUrl
              bio
              location
             }
          
           }
         }
       }

    repos:search(type:REPOSITORY,query:"${searchText ? searchText : defaultSearchOnStart}",first:15) {
         repositoryCount   
      edges {
           node {
             ... on Repository {
               id
               name       
               description
              primaryLanguage {
                color
                name
              }
              updatedAt
              stargazerCount
            licenseInfo {
              name
              id
            }
              owner {
                login              
              }
             }
           }
         }
       }
  
  }`;

  const countResults = (repositoriesCount: number, usersCount: number) => {
    setResultsCount(repositoriesCount + usersCount);
  }

  const fillList = (repositories: any, users: any) => {
    // setResultsList([...repositories, ...users]);

    // Objects have a textual id, so we do a little shuffle 
    const shuffle = (array: any) => array.sort(() => Math.random() - 0.5);
    setResultsList(shuffle([...repositories, ...users]));
  }

  const fetchData = async () => {
    const config = authConfig();
    await axios.post(githubSearchApiEndpoint, {
      query: searchQuery,
    },
      config
    ).then((response) => {
      countResults(response.data.data.repos.repositoryCount, response.data.data.users.userCount);
      fillList(response.data.data.repos.edges, response.data.data.users.edges);
      return response.data;
    })
      .catch((error) => {
        console.log('error', error);
        setError(error);
      });
  }


  useEffect(() => {
    if (!searchText) {
      // In case someone removes all text from input field
      return;
    }

    //when someone typping we want to clear resultsand fetch data
    setResultsCount(null);
    setResultsList([]);

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch])

  useEffect(() => {
    if (!searchText) {
      // At the beginning we do any search to fill the list
      //Only when the user has not used the search  yet
      fetchData();
    }
  }, [])

  return (
    <HomeSection>
      <h1 className='resultCount'>
        {resultsCount ? resultsCount : 0} results
      </h1>
      {error &&
        <span>
          {error.message}
        </span>
      }
      {!error && resultsCount === null &&
        <span>
          Loading..
        </span>
      }
      {resultsList.length > 0 &&
        <ul className='resultsList'>
          <List results={resultsList} />
        </ul>
      }




    </HomeSection>
  )
}

export default Home
