import React,{Component} from 'react';
import List from '../../common/List/List';
import ReactSwipe from 'react-swipe';
import pubsub from 'pubsub-js';

class Home extends Component{
  state={
    list:[]
  };
  componentDidMount(){
    pubsub.publish('view_loading',true);

    fetch(
      `/data/index.data`
    ).then(
      res => res.json()
    ).then(
      data=>{
        setTimeout(()=>{
          pubsub.publish('view_loading',false);
          console.log('data',data);
          this.setState({list:data});
        },1000)
      }
    )
  }
  render(){
    return (
      <div className="Home">
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: true,
          auto: 1000,
        }}
      >
        <div style={{background:'#f00',lineHeight:'150px'}}>页面1</div>
        <div style={{background:'#ff0',lineHeight:'150px'}}>页面2</div>
        <div style={{background:'#00f',lineHeight:'150px'}}>页面3</div>
      </ReactSwipe>

      <List list={this.state.list} dataName="home"/>
      </div>
    )
  }
}

export default Home;