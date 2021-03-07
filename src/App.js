import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Main/Content/Content";
import Footer from "./components/Footer/Footer";
import Hits from "./components/Main/Hits/Hits";
import History from "./components/Main/History/History";
import Menu from "./components/Menu/Menu";

function App() {

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // const URL = "http://127.0.0.1:5000/api/signup";
    const URL = "https://rapapi.herokuapp.com/api/signup";
    fetch(
        URL,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"token": getCookie("token")})
        }
        )
    .then(
        r => r.json()
    ).then(
        d => setCookie("token", d.token, 365)
    );

    const [hits,activeHits] = useState(true)
    const [content,activeContent] = useState(false)
    const [history,activeHistory] = useState(false)
    return (
        <div className="App">
            <Header/>
            <Menu
                hits={hits}
                content={content}
                history={history}
                activeHits={activeHits}
                activeContent={activeContent}
                activeHistory={activeHistory}
            />
            <div className="container">
                {hits ? <Hits/> : <div></div>}
                {content? <Content/>: <div></div>}
                {history ? <History/> : <div></div>}
            </div>
            <Footer
            hits={hits}
            content={content}
            history={history}
            activeHits={activeHits}
            activeContent={activeContent}
            activeHistory={activeHistory}
            />
        </div>
    );
}

export default App;
