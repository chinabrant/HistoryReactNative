import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

export default class MineScene extends Component {

	static navigationOptions = {
		title: '我的',
		tabBarLabel: '我的',
		tabBarIcon: ({ tintColor }) => (
		<Image
        source={require('../../images/tabbar_mine_normal.png')}
        style={[styles.tabBarImage, {tintColor: tintColor}]}
      />
      ),
	};

	render() {
		return (
			<Text> 我的页面</Text>
		);
	}
}

const styles = StyleSheet.create({
	tabBarImage: {
		width: 21,
		height: 20.5,
	},
});