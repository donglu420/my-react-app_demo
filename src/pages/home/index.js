import React,{ PureComponent } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop

 } from './style';

class Home extends PureComponent{
	handlieScrollTop(){
		window.scrollTo(0, 0);
	}
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4685/15af36f728068dfa8860f2a6259c19a5a84f0921.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handlieScrollTop}>回到顶部</BackTop> : null}
				
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}
	bindEvents () {
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}

}
	const mapState = (state) => ({
		showScroll: state.getIn(['home','showScroll'])
	});
 	const mapDispatch = (dispatch) =>({
		changeHomeData() {
			dispatch(actionCreators.getHomeInfo());
		},
		changeScrollTopShow(e){
			if (document.documentElement.scrollTop > 100) {
				dispatch(actionCreators.toggleTopShow(true));
			}else {
				dispatch(actionCreators.toggleTopShow(false));
			}
		}
	});

export default connect(mapState, mapDispatch)(Home);