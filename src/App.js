import './App.css';
import img from './content/poster.jpg';

function App() {
    return (
        <div className="App">
            <div className="header__wrapper">
                <div className="container">
                    <header className='header'>
                        <h1 className='header__title'>looool</h1>
                        <div className="content__menu">
                            <button>По популярности</button>
                            <button lol='(тут список надо сделать, мб выпадающий,для мобилки переход на новую стр??)'>По
                                жанру
                            </button>
                            <button>По новизне</button>
                            <button>Поиски ранее</button>
                        </div>
                    </header>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="content__search">
                        <form>
                            <input type="text" className="content__search_input"/>
                            <button className="content__search_btn">search</button>
                        </form>
                    </div>
                    <div className="content__inner">
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                        <div className="content__inner_item">
                            <img src={img} alt="" className="content__inner_item_img"/>
                            <div className="content__inner_item_person">
                                чиф киф киф чиф
                            </div>
                            <div className="content__inner_item_title">
                                эйн эбаут зис чиф киф
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__wrapper">
                <div className="container">
                    <footer>
                        <div className="footer__menu">
                            <a href="#" className="footer__menu_link">Наши контакты или че</a>
                            <a href="#" className="footer__menu_link">мб еще что-то</a>
                            <a href="#" className="footer__menu_link">ну и еще</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
