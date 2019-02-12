import  React from 'react';
import './List.css';
import {Link} from 'react-router-dom';

const List = ({list,dataName}) => (
  <div className="newsList">

    <ul>
      {
        list.map(item=>(
          <li key = {item.id}>
            <Link to = {{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>
              <h2>{item.id}.{item.title}</h2>
              <p>{item.detail}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default List;