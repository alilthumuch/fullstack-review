import React from 'react';

const RepoItem = (props) => {
	return (
		<div>
		<td>
			{props.forks_count}
		</td>
		<td>
			{props.id}
		</td>
		<td>
			{props.repos_url}
		</td>
		<td>
			{props.username}
		</td>
		</div>
	)
}

export default RepoItem;