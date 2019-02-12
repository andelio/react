import React,{Component} from 'react';
import head from '../../assets/img/head.png'
import zan from '../../assets/img/zan.png'
import xing from '../../assets/img/xing.png'
import fx from '../../assets/img/fx.png'

import './Detail.css';

import querystring from 'query-string';

import date from '../../api/date';

class Detail extends Component{
  constructor(){
    super();
  }
  state={
    detail:{}
  };
  componentDidMount(){
    let id = this.props.match.params.id-0;
    let dataName = querystring.parse(this.props.location.search).dataName;
    console.log('id',id,dataName);
    fetch(
      `/data/article_${dataName}.data`
    ).then(
      res => res.json()
    ).then(
      data => this.setState({
        detail:data[id-1]
      })
    )
  }

  render(){
    let detail = this.state.detail;
    // console.log('detail',detail);
    // console.log('detail1',this.state.detail);
    return(
      <>
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
          </ul>
        </div>
        <div className="content">
          <div className="header clear"><h2><img src={detail.author_face ? detail.author_face : head} alt=""/></h2><p>作者名字</p></div>
          <div className="cont">
            <h3>{detail.title}</h3>
            <div className="time"><p>{commmon_global.fillzero(9)}|{date(detail.time)}<span><img src={zan} alt="" /></span></p>
            </div>
            <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}>
            </div>
          </div>
        </div>
        <div className="foot-btn">
          <ul>
            <li className="say">
              <a href="javascript:;">
                <i></i><span></span>
              </a>
            </li>
            <li className="zan">
              <a href="javascript:;">
                <i></i><span></span>
              </a>
            </li>
            <li className="xing">
              <a href="javascript:;">
                <i><img src={xing} alt="" /></i>
              </a>
            </li>
            <li className="fx">
              <a href="javascript:;">
                <i><img src={fx} alt="" /></i>
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Detail;