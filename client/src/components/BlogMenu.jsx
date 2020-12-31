import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";
import Axios from "axios";

//Keywords API
const keywordsAPI = "http://localhost:5000/keywords";

function BlogMenu (){
//Set State

const [keywords, setKeywords] = useState([]);

//API call to retrieve keywords data
    const getKeywords = ()=>{
        Axios.get(keywordsAPI).then((response) =>{
        setKeywords(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    };

//Calling getKeywords method
    useEffect(()=>{
        if(keywords.length===0){
            getKeywords()
        }
    },[keywords]);
    return(
    <div className="blog-menu">
        <ul className="blog-menu__list">
            {keywords.map((keyword)=>(
                <li className="blog-menu__list-item">
                    <Link className="blog-menu__link" to={{
                        pathname: `/keywords/${keyword.title}`, id: keyword.id
                    }}>{keyword.title}</Link>
                    </li>
            ))}
        </ul>
    </div>
    );
}

export default BlogMenu;