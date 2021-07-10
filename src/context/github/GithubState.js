import { useReducer } from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING, 
  GET_USER
} from '../types';


const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)


  //Search USers
  //Get Users from search parameter
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({ type: SEARCH_USERS, payload: res.data.items})
  }

  //Get user
  //Get Single user details
  const getUser = async username => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({ type: GET_USER, payload: res.data })
  }

   //Get User repos
   const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({ type: GET_REPOS, payload: res.data })
    
  }


  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })


  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING})

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }} >
      {props.children}
  </GithubContext.Provider>
}

export default GithubState;