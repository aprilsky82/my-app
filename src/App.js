import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    const [count, setCount] = useState([])

    const getdata = async () => {
        axios
            .get("http://newsapi.org/v2/everything?q=tesla&from=2021-01-19&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")
            // .then(res => console.log(">>>>>>", res.data.articles))
            .then(res => setCount(res.data.articles))
            .catch(err => console.log(err));
    }



    return (
        <div>
            <h1>{count.length}</h1>
            {count.map(news => (
                    <div className="card" style="width: 75px;">
                        <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{news.author}</h6>
                            <p className="card-text">{news.description}</p>
                            <a href="#" className="card-link">{news.publishedAt}</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>

            ))}
            <button type="button" className="btn btn-success" onClick={getdata}>뉴스불러오기</button>

        </div>
    );
};

export default App;
