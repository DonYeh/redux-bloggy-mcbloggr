import React from "react";

export default function BlogList({ posts }) {
	const listItems = posts.map(p => <li>{p.title}</li>);
	return <ol>{listItems}</ol>;
}
