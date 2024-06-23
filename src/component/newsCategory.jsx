import React, { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';


function NewsCategory() {

    const [news, setNews] = useState([]);
    const searchTopic = useParams();
    const nevigate = useNavigate();


    // function for showing selected news//
  function showSelectNews(e) {
    const result = news.find((data) => {
      return data._id === e.target.id;
    });

    nevigate(`/${searchTopic}/details`,{state:result});
    };

   useEffect(()=>{
    axios
    .get(
        `http://newsapi.org/v2/top-headlines?apiKey=5d75c27138a9491cbcd4ff38f9ebd30f&q=${searchTopic.topic}`
      )
      .then((res) =>
          setNews(
          res.data.articles.map((item) => {
              return { ...item, _id: nanoid() };
            })
          )
        )
        .catch((err) => console.log(err));
   },[searchTopic])
      

return(
    <>
    <div className="flex flex-wrap justify-center w-auto gap-2">
        {news.map((item) => (
          <div
            key={item._id}
            className="border-2 p-2 mt-2 mb-2 w-80 rounded-md"
          >
            <div>
                <p
                  id={item._id}
                  className="border-b-2 shadow-sm cursor-pointer"
                  onClick={showSelectNews}
                >
                  {item.title}
                </p>
            </div>
            <div className="mt-2">
              <img src={item.urlToImage} alt="N/A" width="100%" />
            </div>
            <div>
              <p className="">
                <span className="font-semibold">Author-:</span>
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
)
}

export default NewsCategory