import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

export default class QuestionIndexScene extends Component {

	static navigationOptions = {
		title: '问答',
		tabBarLabel: '问答',
		tabBarIcon: ({ focused, tintColor }) => {

			if (focused) {
				return (<Image
        		source={require( '../../images/tabbar_topic.png')}
        		style={[styles.tabBarImage, {tintColor: tintColor}]}
        		/>);
			} else {
				
				return (<Image
        			source={require( '../../images/tabbar_topic_normal.png')}
        			style={[styles.tabBarImage, {tintColor: tintColor}]}
        		/>);
        	}

      },
	};

	render() {
		return (
			<Text> 问答页面</Text>
		);
	}
}

const styles = StyleSheet.create({
	tabBarImage: {
		width: 21,
		height: 20.5,
	},
});