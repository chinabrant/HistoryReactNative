import React, { Component } from 'react';
import {
	AppRegistry,

}

from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScene from './scene/home/HomeScene';
import CategoryScene from './scene/category/CategoryScene';
import QuestionIndexScene from './scene/question/QuestionIndexScene';
import MineScene from './scene/mine/MineScene';

const HomeTab = TabNavigator({
	Home: { screen: HomeScene },
	Category: { screen: CategoryScene },
	Question: { screen: QuestionIndexScene },
	Mine: { screen: MineScene },
});

HomeTab.navigationOptions = {
	activeTintColor: '#e91e63',
};

const History = StackNavigator({
	Home: { screen: HomeTab }
});

AppRegistry.registerComponent('History', () => History)