import React from "react";
import { useLocation ,Link} from "react-router-dom";

function Details() {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className="flex justify-end me-5 mt-5">
        <button className="border-2 rounded-md p-1 ps-5 pe-5 bg-red-600 text-white"><Link to='/'>Back</Link></button>
      </div>
      <div className="md:flex w-[80%] m-auto gap-2 mt-5">
        <div>
          {<img src={data.urlToImage} alt="pic" style={{height:"400px"}} className="border-2  rounded-md"/>}
        </div>
        <div className="border-2 p-2 rounded-md">
          <div>
            <p className="font-bold underline">Title-:</p>
            {data.title}</div>
          <div>
            <p className="font-bold underline">Author-:</p>
            {data.author}
            </div>
            <div>
            <p className="font-bold underline">Description-:</p>
            {data.description}
            </div>
            <div>
            <p className="font-bold underline">Content-:</p>
            {data.content}
            </div>
            <div>
            <div>
            <p className="font-bold underline">URL-:</p>
            <a href={data.url} target="_blank">
            {data.url}
            </a>
            </div>
            <p className="font-bold underline">PublishedAt-:</p>
            {data.publishedAt}
            </div>
        </div>
      </div>
    </>
  );
}

export default Details;
