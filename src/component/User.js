import React, { useEffect } from 'react';
import Spinner from '../component/Spinner.js';
import {Link} from 'react-router-dom';
import Repos from './Repos.js'

const User = ({user ,loading , repos, getUser , getUserRepos, match  })=>  {
    useEffect(()=>{
  getUser(match.params.login);
  getUserRepos(match.params.login);

    } , []);


        const {name,avatar_url,location,bio,company,blog,login,html_url,followers,following,public_props,public_repos,public_gists,hireable}=user;
        if (loading) return <Spinner />;


        return (
            <React.Fragment>
                <Link to='/' className='btn btn-light'> Back To Search</Link>
            {/* Hireable: {''};
            {hireable ? (
                <i className='fas fa-check text-success' />
                ) : (
                    <i className='fas fa-times-circle text-danger' />
                    )} */}

                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}} />
                        <h2>{name}</h2>
                        <p>{location}</p>
                        </div>
                    <div>
                    {bio && (
                        <>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'> Visit Github Profile</a>
                    <ul>
                        <li>
                    {login && <> <strong>Username:</strong> {login}</>}
                        </li>
                        
                        <li>
                    {company && <> <strong>Company:</strong> {company}</>}
                        </li>
                  
                        <li>
                    {blog && <> <strong>Website:</strong> {blog}</>}
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>Public Gists: {public_gists}</div>

                    </div>


                    <Repos repos={repos} />
                    </React.Fragment>
        )

      

}

export default User;