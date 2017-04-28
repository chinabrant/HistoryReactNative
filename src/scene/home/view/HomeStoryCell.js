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

		let img = null;
		if (this.props.rowData.image !== undefined && this.props.rowData.image !== '') {
			img = <Image
				style={styles.cover}
				source={{ uri: this.props.rowData.image}}
			/>;
		}
		else {
			img = null;
		}

		return (<View style={styles.container}>

			{img}
			
			<View style={styles.rightContainer}>

				<Text>{this.props.rowData.title}</Text>
				<View style={styles.cateContainer}>
					<Text style={styles.cate}>{this.props.rowData.cate}</Text>
					<View style={{flex: 1}}></View>
					<Text style={styles.time}>{this.props.rowData.time}</Text>
				</View>
				
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
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	cateContainer: {
		flexDirection: 'row',
		marginTop: 10,
		alignSelf: 'flex-end',
	},

	cate: {
		
		textAlign: 'center',
		justifyContent: 'flex-start',
		paddingLeft:5,
		paddingRight: 5,
		paddingTop: 2,
		paddingBottom: 2,
		borderColor: 'red',
		borderWidth: 0.5,
		borderRadius: 5.0,
	},

	time: {
		color: '#999999',
	},
});