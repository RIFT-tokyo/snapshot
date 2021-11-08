// import React from "react";

const Image: React.VFC<{url: string, key: string, title: string}> = ({url, key, title}) => {
	return (
		<li>
			<img src={url} key={key} alt={title} />
		</li>
	)
}

export default Image;
