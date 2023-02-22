import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  


  const updateNews = async () =>{
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    //we are setting the states int setstates 

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }


  useEffect(() => {
    document.title = "NewsMonkey - " + capitalizeFirstLetter(props.category);
    updateNews();
    // eslint-disable-next-line
  }, [])
  


 


  // const handlePrevClick = async ()=>{
  //   // console.log("previos");

  //   //hum ne kya kiya ek cheez ko 3 baar likhne se aacha ek hi func mein likh diya aur sab jagah call kar rahe hain
  //   //iska code humne update news mein likh diya aue update news func ko call kar diya

  //   //these are class based 
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=230cccbb7ffc48e899d9656782fbbc8c&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // })
    
  //   setPage(page-1)
  //   updateNews();
    
  // }

  //this si handling the next button wher we have page object in the state func which we are increasing and directly changing in the api key ny using javascript 
  // const handleNextClick = async ()=>{
  //   // console.log("next");
  //   //where 20 is the page size we have set and the totalResult is the number of articles coming from the api
  //   //math.ceil providing the ceil value eg 4.6 ceil value will be 5

  //   // if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

  //   // }
  //   // else{

  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=230cccbb7ffc48e899d9656782fbbc8c&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   //parsing the data to json format
  //   //   let parsedData = await data.json();
  //   //   console.log(parsedData);
  //   //   //again setting the states and changing the page number
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   })
  //   // }


    
  //   setPage(page+1)
  //   updateNews();


  // }



  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    //we are setting the states in setstates 
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
    
  };



    return (
      
      <>
        {/* //style pe 2 curly bracket isliye kyuki is javascript k liye aur ek obect ke liye  */}
        <h1 className="text-center" style={{margin: "40px 0px", marginTop: '90px'}}>NewsDonkey - {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
           
        >

        <div className="container">

          <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })};
          </div>

        </div>

        </InfiniteScroll>
        

        {/* //these are the next and previous button  */} 
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        
      </>
    )
  
}



//this is how we set defaultprops in class based function
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
}

//this is how we set the required field that country can only be string
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News