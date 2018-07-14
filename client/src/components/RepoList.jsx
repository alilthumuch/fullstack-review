import React from 'react';
import RepoItem from './RepoItem.jsx'

const RepoList = (props) => {
	return(
	  <div>
	    <h4> Repo List Component </h4>
	    <table>
	    	<tr>
	    	{props.repos.map(data => {
	    		return  <RepoItem forks_count = {data.forks_count} id = {data.id} repos_url = {data.repos_url} username = {data.username}/>
	    	})}
	    	</tr>
	    </table>
	  </div>
  	)
}

export default RepoList;
