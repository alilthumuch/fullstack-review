import React from 'react';
import RepoItem from './RepoItem.jsx'

const RepoList = (props) => {
	return(
	  <div>
	    <h4> Repo List Component </h4>
	    <table>
	    	<tr>
	    		<td>FORKS NUM</td>
	    		<td>ID</td>
	    		<td>REPO URL</td>
	    		<td>USER</td>
	    	</tr>
	    	{props.repos.map((data, index) => {
	    		if (index < 25){
	    		return  <RepoItem forks_count = {data.forks_count} id = {data.id} repos_url = {data.repos_url} username = {data.username}/>
	    		}
	    	})}
	    </table>
	  </div>
  	)
}

export default RepoList;
