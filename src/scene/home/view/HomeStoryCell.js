import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class HomeStoryCell extends Component {


	render() {
		return (<View style={styles.container}>
			<Image
				style={styles.cover}
				source={{ uri: this.props.image}}
			/>

			<View style={styles.rightContainer}>

				<Text>{this.props.title}</Text>
				<Text style={styles.cate}>{this.props.cate}</Text>
			</View>
		</View>);
	}
}

const styles = StyleSheet.create({

	container: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 0.5,
		borderColor: 'gray',
		backgroundColor: 'white',
	},

	cover: {
		width: 60,
		height: 60,
	},

	rightContainer: {
		paddingLeft: 10,
		paddingRight: 10,
		flex: 1,
	},

	cate: {
		
		textAlign: 'center',
		
		paddingLeft:5,
		paddingRight: 5,
		paddingTop: 2,
		paddingBottom: 2,
		borderColor: 'red',
		borderWidth: 0.5,
		borderRadius: 5.0,
	},
});