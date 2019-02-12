import React,{Component} from 'react'
import './User.css'
import headimg from '../../assets/img/headimg.png'
class User extends Component{
  logout(){
  //  求后端 删cookie ->返回结果 -> 前端跳转 this.props.history.push(...
  }
  render(){
    return (
      <div className="User-content">
        <div className="User-header">
          <h2><img src={headimg} alt=""/></h2>
          <div className="user-box">
            <a href="javascript:;">{this.props.data.username}</a>
            <a onClick={this.logout.bind(this)}>注销</a>
          </div>
          <ul className="clear">
            <li>
              <span>0</span>
              <p>关注</p>
            </li>
            <li>
              <span>0</span>
              <p className="end">粉丝</p>
            </li>
          </ul>
        </div>
        <div className="docList">
          <ul>
            <li className="gk-text">
              <i></i>
              <p>公开博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="mm-text">
              <i></i>
              <p>秘密博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="cg-text">
              <i></i>
              <p>草稿箱</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="sc-text">
              <i></i>
              <p>收藏夹</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="my_cz">
              <i></i>
              <p>收藏夹</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default User;