import React,{Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends Component{
  render(){
    return(
      <div className="content">
        <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" name="username" value={this.state.username} onChange={this.changeIpt.bind(this)} />
            <span>账号</span>
          </li>
          <li>
            <input type="text" name="password" value={this.state.password} onChange={(ev)=>this.changeIpt(ev)} />
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="登录" className="login-btn" onClick={this.login.bind(this)}/>
          <a href="javascript;;" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
  state ={
    username:'',
    password:'',
  };
  changeIpt(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  login(){
    console.log('login',this.state.username,this.state.password);

    fetch(
      `/data/user.json`
    ).then(
      res => res.json()
    ).then(
      data=>{
        if(data.auth){
          this.props.history.push({pathname:'/user'})
        }else{
          this.props.history.push({pathname:'error'})
        }
      }
    )
  }
}

export default Login;