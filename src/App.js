import React, { Component } from 'react';
import './App.css';
import Search from './utils/Search';
import {getAllJsonp} from "./utils/jsonp";

// var items = {result:['','']}
var items = null;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items
    }
    this.message = this.message.bind(this);
    this.query = "items";
    this.tag = "sql";
  }

  componentDidMount(){
      //getAllJsonp("西瓜")//success
      //getAllAxios("西瓜");//fail
      this.setState({
          items:""
      })
    }


  message (query, tag){
    this.query = query;
    this.tag = tag;
    console.log(this.query);
    console.log(this.tag);
    getAllJsonp(this.query, this.tag).then((myjson) => {
        //测试用例是items
        console.log(myjson.result);
        this.setState({
            items:myjson
        })
        })
      // ContactsAPI.getAll(this.query).then((myjson) => {
      //     console.log(myjson.result);
      //     this.setState({
      //         items:myjson
      //     })
      // })

  }

  render() {
    return (
        <Search onMessage = {this.message} items = {this.state.items} />
    );
  }
}

export default App;
