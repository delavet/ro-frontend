import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
      super(props);
      this.state = {
          query:'',
          tag: '',
      }
      this.handleEnter = this.handleEnter.bind(this);
      this.searchButton = this.searchButton.bind(this);

  }


  updateQuery(query, tag){
      this.setState({
          query: query.trim(),
          tag: tag.trim()
      })

  }

  handleEnter(event){
      if(event.charCode === 13 ){
          this.props.onMessage(this.state.query, this.state.tag);
          console.log(event.charCode);
      }


  }

  searchButton(event){
      this.props.onMessage(this.state.query, this.state.tag);
  }

  render(){
      let { items } = this.props;
      let screen;
      if(items){
          screen =  (
              <ol className='contact-list'>
              {items.data.map((item,index) =>
                  <li key={index} className='contact-list-item'>
                      <div className='contact-details'>
                          <p><code>{item.code}</code></p>
                          <p>{item.id}</p>
                      </div>
                  </li>
              )}
          </ol>)
      }
      else {
          screen = (<div style={ {padding : "20px"} } className='null'>There is nothing to show</div>)
      }

      return (
          <div>
              <div className='list-contacts'>
                  <div className='list-contacts-top'>
                    <input
                        onKeyPress={(event) => {this.handleEnter(event)}}
                        className='search-contacts'
                        type='text'
                        placeholder='Query Here'
                        onChange={(event) => {this.updateQuery(event.target.value, this.state.tag)}}
                    />
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='tag Here'
                        onChange={(event) => {this.updateQuery(this.state.query, event.target.value)}}
                    />
                    <button className='button-cancel' onClick= {this.searchButton}>Search</button>
                  </div>
              </div>

              {screen}


          </div>
      )
  }



}


export default Search