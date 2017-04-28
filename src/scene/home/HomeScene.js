import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ListView,
	Alert,
	Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomeStoryCell from './view/HomeStoryCell';
import AV from 'leancloud-storage';

export default class HomeScene extends Component {

	static navigationOptions = {
		title: '首页',
		tabBarLabel: '首页',
		tabBarIcon: ({ tintColor }) => (
		<Image
        source={require('../../images/tabbar_home_normal.png')}
        style={[styles.tabBarImage, {tintColor: tintColor}]}
      />
      ),
	};

	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 }),
		};


	}

	getStoryList() {

		console.log('+++++++++++++++++++++++++++++++++++++++=');
	

		var query = new AV.Query('Story');
		query.limit = 10;
		query.find().then(function(results) {		

			this.setState({  
				dataSource: this.state.dataSource.cloneWithRows(results),
			});

		}, function(error) {

			console.log('读取列表失败');
			
		});
	}

	render() {

		console.log(this.state.dataSource);
		
		return (

			<View style={styles.container}>
			<Button 
				onPress= {() => this.getStoryList() }
				title="Load Data"
			/>
				<ListView
					automaticallyAdjustContentInsets={false}
					dataSource={this.state.dataSource}
					renderRow={ (rowData) => <HomeStoryCell rowData={rowData} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabBarImage: {
		width: 21,
		height: 20.5,
	},

	container: {
		flex: 1,
	},
});