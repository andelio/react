import React,{Component} from 'react';

import Header from '../common/Header/Header';
import Home from './Home/Home';
import Footer from '../common/Footer/Footer';
import Detail from './Detail/Detail';
import Column from './Column/Column';
import Follow from './Follow/Follow';

import User from './User/User';
import Login from './Login/Login';
import Reg from './Reg/Reg';
import Error from '../common/Error/Error';

import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from '../guard/Auth';
import Loading from '../common/Loading/Loading';
import pubsub from 'pubsub-js';

class App extends Component {
    constructor(){
        super();
        this.state = {
            bNav : true ,
            bFoot : true,
            bLoading: false
        };
        pubsub.subscribe('view_loading',(mess,bl)=>{
            console.log('app_loading',bl);
            this.setState({bLoading:bl})
        })
    }

    componentWillReceiveProps(nextProps){
       

        //监听路由
        let path = nextProps.location.pathname;

        if(/home|follow|column/.test(path)){
            this.setState({nNav:true,bFoot:true})
        }

        if(/user/.test(path)){
            this.setState({bNav:false,bFoot:true})
        }

        if(/lofin|reg|detail/.test(path)){
            this.setState({bNav:false,bFoot:false});
        }
    }

    render(){
        return (
            <>
            {/*rc_root 不是响应式数据 */}
            {this.state.bLoading && <Loading/>}
            {this.state.bNav && <Header/>}

            <Switch>
                <Route path="/home" component = {Home}/>
                <Route path="/follow" component = {Follow}/>
                <Route path="/column" component = {Column}/>
                {/* <Route path="/user" component = {User}/> */}
                <Auth path="/user" component = {User}/>

                <Route path="/login" component = {Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path="/detail/:id" component = {Detail} />
                <Redirect exact from="/" to="/home" />
                <Route component = {Error}/>
            </Switch>

            {this.state.bFoot && <Footer/>}
            </>
        )
    }
}
export default App;