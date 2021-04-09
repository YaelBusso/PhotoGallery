  
import React, { useEffect, useState } from 'react';
import './imageGallery.css';
import images from './sampleData';
import { SRLWrapper } from 'simple-react-lightbox';
import img from './images/img1.jpeg';
// import img2 from './images/img2.jpeg';
// import img3 from './images/img3.jpeg';
// import img4 from './images/img4.jpeg';
// import img5 from './images/img5.jpeg';
// import img6 from './images/img6.jpeg';
// // import img7 from './images/img7.jpeg';
// // import img8 from './images/img1.jpeg';
// // import img9 from './images/img1.jpeg';
// // import img10 from './images/img1.jpeg';
// // import img11 from './images/img1.jpeg';
// // import img12 from './images/img1.jpeg';
const img1=img;

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,

	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

function App() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);
		 //important change
	return (
		<div className="App">
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="google maps" tagActive={tag === 'google maps' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="users" tagActive={tag === 'users' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="owner" tagActive={tag === 'owner' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper options={options}>
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={image.url}>
								<img className="image" src={image.url} alt={image.imageName} />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default App;