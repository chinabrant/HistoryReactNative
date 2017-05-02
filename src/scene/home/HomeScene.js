import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ListView,
	Alert,
	Button,
	RefreshControl,
	ActivityIndicator,
	Animated,
  	FlatList,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomeStoryCell from './view/HomeStoryCell';
import AV from 'leancloud-storage';
import LoadMoreFooter from '../views/LoadMoreFooter';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


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
			isShowBottomRefresh: true,
			dataList: [],
		};

		// 当前页码 
		this.page = 0;
		this.storyList = [];
		this.getStoryList();

	}

	getStoryList() {

		console.log('+++++++++++++++++++++++++++++++++++++++=');

		var query = new AV.Query('Story');
		query.limit(10);
		query.skip(this.page * 10);
		query.descending('sortId');
		query.find().then((results) => {

			this.setState({
				dataList: (this.page === 0) ? results : this.state.dataList.concat(results),
			});

		}, function(error) {

			console.log('读取列表失败');
			
		});
	}

	renderHeader() {
		return (
			<View>
				<Text style={{height: 44}}>加载中...</Text>
			</View>
			);
	}

	_refreshData() {
		this.page = 0;

		this.getStoryList();
	}

	_loadMoreData() {
		this.page++;
		this.getStoryList();
	}

	componentWillMount() {  
		this.getStoryList();
	} 

	_toEnd() {

          //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
          this._loadMoreData();        
     }

    _renderFooter() {
          
              // 加载全部
              return <LoadMoreFooter isLoadAll={true}/>
          
      }

    renderItemView({item}) {
    	return (
    			<HomeStoryCell rowData={item} />
    		);
    }

	render() {
		
		return (

			<View style={styles.container}>

				<AnimatedFlatList

	  				data={this.state.dataList}
	  				renderItem={this.renderItemView}
					renderFooter={ this._renderFooter.bind(this) }
					onEndReached={ this._toEnd.bind(this) }
	                onEndReachedThreshold={10}
	  				refreshControl={
							<RefreshControl
		                    refreshing={false}
		                    onRefresh={this._refreshData.bind(this)}
		                />}

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