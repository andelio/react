import React,{Component} from 'react';
import List from '../../common/List/List';
import './Follow.css';

class Follow extends Component{
  state ={
    list:[]
  };
  componentDidMount(){
    fetch(
      `/data/follow.data`
    ).then(
      res=>res.json()
    ).then(
      data =>this.setState({list:data})
    )
  }

  render(){
    return (
      <div className="newsList">
        <List list={this.state.list} dataName="follow"/>
      </div>
    )
  }
}

export default Follow;