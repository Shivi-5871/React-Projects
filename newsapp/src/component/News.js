import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    // console.log("This is a constructor from News Component")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }   
  }

  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56f54a35fc8e4e99ab2df9cf842fa918&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);   //it is a promise
    let parsedData = await data.json()   //it is also a promise
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56f54a35fc8e4e99ab2df9cf842fa918&page=${this.state.page - 1}&pageSize = ${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);   //it is a promise
    let parsedData = await data.json()   //it is also a promise
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
      loading: false
    })
  }
  
  handleNextClick = async () => {
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56f54a35fc8e4e99ab2df9cf842fa918&page=${this.state.page + 1}&pageSize = ${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);   //it is a promise
      let parsedData = await data.json()   //it is also a promise
      this.setState({
        page : this.state.page + 1,
        articles : parsedData.articles,
        loading: false
      })
    }
  }

  render() {
    return ( 
        <div className="container my-3">
          <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Spinner/>}

          <div className="row">
            
            {!this.state.loading && this.state.articles.map((element) => {
            
            return <div className="col-md-4" key = {element.url} >
              
              <NewsItem title = {element.title? element.title: ""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date={element.publishedAt} source={element.source.name}/>
           
            </div>

            })}
          </div>
          <div className="conatiner d-flex justify-content-between" >
            <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      )
  }
}

export default News
