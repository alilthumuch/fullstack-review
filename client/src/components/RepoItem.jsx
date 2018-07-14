import React from 'react';

const RepoItem = (props) => {
	return (
		<tr>
		<td className = "forks">
			{props.forks_count}
		</td>
		<td className = "props">
			{props.id}
		</td>
		<td className = "forks">
			{props.repos_url}
		</td>
		<td className = "otherstuff">
			{props.username}
		</td>
		</tr>
	)
}

export default RepoItem;