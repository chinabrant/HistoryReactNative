import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ListView,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomeStoryCell from './view/HomeStoryCell';

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
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows([
				{title:'这里是微信公众帐号『MacTalk』的WEB站点。我会精选一些微信文章放到这个网站上。', 
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title: 'MacTalk 开通于2012年末，内容起于 Mac 而不止 Mac，沿用了一贯的科技与人文相结合的风格', 
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title:'输出的文字对我意义非凡', 
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title:'它们能够帮助我探索、梳理和记录生活。', 
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title: '今何在在悟空传里写到', 
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title: '我不知道为什么因为失去而忧伤，为什么为了时光短暂而忧愁', 
				cate: '亚索',
				image: 'http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg'},

				{title:'现在看起来，这显然是不现实的，哪一条都做不到啊。',
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"},

				{title:'新 Mac 的硬件配置不说了，性能非常强劲，开了几十个应用，Safari 的标签页开了几百个，各种虚拟机、Docker能开的全给他开了，依旧快的无与伦比，依旧切换顺畅，依旧每个 App 都无与伦比。国外科技评论人 Jonathan Morrison 对 13 英寸不带 Touch Bar 的 MacBook Pro 做了评测，他找了价格便宜量又足（硬件配置更高）的 Windows PC 笔记本，去处理 1080P 的视频（用 Premiere 和 Final Cut Pro X 进行高比特率 H.264 导出），PC 花的时间是8分多，Mac 是1分23秒。',
				cate: '亚索',
				image: "http://korea.people.com.cn/mediafile/201403/26/F201403261546202302528829.jpg"}
				])
		};
	}

	render() {
		return (

			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={ (rowData) => <HomeStoryCell title={rowData.title} image={rowData.image} cate={rowData.cate} />}
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
		paddingTop: 22,
	},
});