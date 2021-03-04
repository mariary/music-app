import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Main/Content/Content";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Hits from "./components/Main/Hits/Hits";
import History from "./components/Main/History/History";

function App() {
    const [hits,activeHits] = useState(true)
    const [content,activeContent] = useState(false)
    const [history,activeHistory] = useState(false)
    return (
        <div className="App">
            <Header/>
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
