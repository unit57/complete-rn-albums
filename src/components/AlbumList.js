import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			albums: [],
		};
	}

	componentDidMount() {
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
		.then((res) => {
			return res.json();
		})
		.then((resJson) => {
			this.setState({ albums: resJson });
		})
		.catch((error) => { console.error(`Error: ${error}`); });
	}

	renderAlbums(){
		const { albums } = this.state;
		return albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
	}

	render() {
		const { albums } = this.state;

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
};

export default AlbumList;
