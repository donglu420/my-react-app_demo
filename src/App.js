import React,{ PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import { Globalstyle,IconFontStyle } from './style';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store';


class App extends PureComponent {
	render(){
		return (

	<Provider store={store}>
		    <Globalstyle/>
		    <IconFontStyle/>
		    <BrowserRouter>
		    	<div>
		    		<Header />
		    		<Route path='/' exact component={Home}></Route>
		    		<Route path='/detail:id' exact component={Detail}></Route>
		    		<Route path='/Login' exact component={Login}></Route>
		    	</div>
		    </BrowserRouter>

	</Provider>  
    );
	}
}

export default App;
