import React from "react";

export default function BlogDetail({ posts }) {
	return post ? (
		<div>
			<h1>{posts.title}</h1>
			<p>{post.content}</p>
		</div>
	) : null;
}
