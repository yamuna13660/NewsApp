import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
  captialize=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
   constructor(props)
    {
        super(props);
        this.state={
          articles: [],
          page:1,
          totalarticles:0,
          loading:true
        }
        document.title=`${this.captialize(this.props.category)}-NewsGlance`
    }
     async componentDidMount() {
        console.log("API Key:", this.apikey);
   this.updateNews();
}
  async updateNews()
    {
      console.log("API Key: ", this.props.apikey);
      this.props.setprogress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=6`;
       this.setState({loading:true})
      let data= await fetch(url);
        this.props.setprogress(30);
      let parsedata=await data.json();
        this.props.setprogress(70);
      this.setState({articles: parsedata.articles,
        totalarticles:parsedata.totalResults,
        loading:false,
      })
       this.props.setprogress(100);
    }
   fetchMoreData =async () => {
     const nextPage = this.state.page + 1;
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${nextPage}&pageSize=6`;
      let data= await fetch(url);
      let parsedata=await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalarticles:parsedata.totalResults,
        page:nextPage
      })
  }
  render() {
    return (

      <div className='container'>
        <h1 className='my-3 text-center'>NewsGlance-Top {this.captialize(this.props.category)} Headlines</h1>
       {this.state.loading &&<Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles?.length||0}
          next={this.fetchMoreData}
          hasMore={(this.state.articles?.length ||0)!==this.state.totalarticles}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className='row'>
        {Array.isArray(this.state.articles) &&this.state.articles.map((ele)=>{
          return <div className='col-md-4' key={ele.url}>
            
        <Newsitem   title={ele.title?ele.title:""} 
        description={ele.description?ele.description:""} 
        date={ele.publishedAt.slice(0,10)}
        imageurl={ele.urlToImage?ele.urlToImage:"https://cdn.wccftech.com/wp-content/uploads/2025/05/20250519_100154-scaled.jpg"} newsurl={ele.url}/>
        </div>
        })}
         </div>
         </div>
           </InfiniteScroll>
      </div>
    
    )
  }
}
export default News;
/* handlepreclick=async()=>{
      this.setState({page:this.state.page-1})
      this.updateNews()
    }
    handlenextclick= async()=>{
       if(!(this.state.page+1>Math.ceil(this.state.totalarticles/6))){
      this.setState({page:this.state.page+1})
      this.updateNews()
       }
    }*/