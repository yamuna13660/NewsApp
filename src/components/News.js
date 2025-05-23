import React,{useEffect,useState} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
const[articles,setarticles]=useState([]);
const[loading,setloading]=useState(true);
const[page,setpage]=useState(1);
const[totalResults,settotalresults]=useState(0);

useEffect(() => {
  document.title = `${captialize(props.category)} - NewsGlance`;
}, [props.category]);


  const captialize=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  useEffect(()=>{
    updateNews();
    /* eslint-disable-next-line*/
  },[])
 const updateNews=async()=>
    {
      props.setprogress(10);
     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=883e492209d64158b418ddcaa4c70f0d&page=${page}&pageSize=6`;
       setloading(false);
      let data= await fetch(url);
        props.setprogress(30);
      let parsedata=await data.json();
        props.setprogress(70);
      setarticles( parsedata.articles);
      settotalresults(parsedata.totalResults);
      setloading(false);
       props.setprogress(100);
    }
  const fetchMoreData =async () => {
    
   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=883e492209d64158b418ddcaa4c70f0d&page=${page+1}&pageSize=6`;
    setpage(page+1);
      let data= await fetch(url);
      let parsedata=await data.json();
      setarticles(articles.concat(parsedata.articles))
      settotalresults(parsedata.totalResults);
  }
    return (
      <div className='container'>
        <h1 className=' text-center' style={{marginTop:'90px'}}>NewsGlance-Top {captialize(props.category)} Headlines</h1>
       {loading &&<Spinner/>}
       <InfiniteScroll
          dataLength={articles?.length||0}
          next={fetchMoreData}
          hasMore={(articles?.length ||0)!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className='row'>
        {Array.isArray(articles) && articles.map((ele)=>{
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
export default News;
  News.defaultProps={
    country:'in',
    category:'general'
  }
  News.propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
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