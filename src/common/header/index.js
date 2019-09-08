import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  {actionCreators}  from './store';
import { Link } from 'react-router-dom';

import{ 
		HeaderWrapper,
		Logo,
		Nav,
		NavIitem,
		SearchWrapper,
		NavSearch,
		SearchInfo,
		SearchInfoTitle,
		SearchInfoSwitch,
		SearchInfoItem,
		SearchInfoList,
		Addition,
		Button
	} from './style';



class Header extends Component {

	getListArea() {
		const { focused,list,page,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage,mouseIn} = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = (page-1) * 10; i < page * 10; i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
	}
		if(focused || mouseIn){
			return(
				<SearchInfo onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => handleChangePage(page,totalPage, this.spinIcon)}
						>
						<span ref={(icon) => {this.spinIcon = icon}} className={"iconfont spin"}>
							&#xe851;
						</span>
						换一批							
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
								{
									pageList
								}
					</SearchInfoList>
				</SearchInfo>
				)
		}else{
			return null;
		};
};
	render() {
		const { focused,handleInputFocus,handleInputBlur,list,login } = this.props;
			return(
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<Link to='/'><NavIitem className='left active' to='/'>首页</NavIitem></Link>
					<NavIitem className='left'>下载App</NavIitem>
					{
						login ? <NavIitem className='right'>退出</NavIitem> : <Link to='./login'><NavIitem className='right'>登陆</NavIitem></Link>
					}
					<NavIitem className='right'>
					<span className="iconfont ">&#xe636;</span>
					</NavIitem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe6b3;
						</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<span className="iconfont">&#xe615;</span>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
					
				</Addition>
			</HeaderWrapper>	
		);
	}	
}
	


const mapStateToProps = (state) => {
	return{
		focused: state.getIn(['header', 'focused']),
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login','login'])

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle){
				originAngle = parseInt(originAngle, 10);
			} else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
		
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);