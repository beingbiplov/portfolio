import React from 'react'
import './css/tags.css'

const Tags = (props) => {
	const tags =  props.tags
	const tagset = tags.map((tag, index) => 
			<li key={index}> 
				<a className='tag'> {tag}</a>
			</li>
		)
	return(
		<ul className="tags">
		  {tagset}
		</ul>
	)
}
export default Tags