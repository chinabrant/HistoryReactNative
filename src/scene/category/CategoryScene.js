import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class CategoryScene extends Component {

	static navigationOptions = {
		title: '分类',
		tabBarLabel: '分类',
		tabBarIcon: ({ tintColor }) => (
		<Image
        source={require('../../images/tabbar_cate_normal.png')}
        style={[styles.tabBarImage, {tintColor: tintColor}]}
      	/>
      ),
	};

	render() {
		return (
			<Text> 分类页面</Text>
		);
	}
}

const styles = StyleSheet.create({
	tabBarImage: {
		width: 21,
		height: 20.5,
	},
});