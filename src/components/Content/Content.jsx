import React, {Component} from 'react';
import ScalableImage from '../ScalableImage/ScalableImage';

class Content extends Component {

  constructor(props) {
    super(props);
    this.setRandomBackgroundAndTextColor = this.setRandomBackgroundAndTextColor.bind(this);
    this.ffffffInDecimal = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5;
  }

  getRandomHexColor() {
    return '#' + Math.floor(Math.random() * this.ffffffInDecimal).toString(16);
  }

  setRandomBackgroundAndTextColor(event) {
    event.target.style.background = this.getRandomHexColor();
    event.target.style.color = this.getRandomHexColor();
  }

  render() {
    return (
      <>
        <p>Дата та місце народження: 18 травня 2002 рік , м.Житомир</p>
        <p>Середня освіта: Житомирський міський колегіум (2008-2019 рік)</p>
        <p>Хобі:</p>
        <ul>
          <li>Читання книг</li>
          <li>Фігурне катання</li>
          <li>Спорт</li>
          <li>Програмування</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol style={{cursor: 'pointer'}} onClick={this.setRandomBackgroundAndTextColor}>
            <li>"Зелена книга"</li>
            <li>"Прихована краса"</li>
            <li>"Початок"</li>
        </ol>
        <p style={{cursor: 'pointer'}} onClick={this.setRandomBackgroundAndTextColor}>
        Львів – це місто, в якому вдало переплелося сьогодення і середньовіччя, вся суворість галицького князівства та романтика сучасності, шалений ритм життя та одночасне відчуття спокою, це місто гордих галицьких князів та сонних левів, котрі спокон віків несуть свою кам’яну варту та оберігають спокій мешканців та гостей загадкового міста.
        </p>
        <a href="https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2" target="_blank">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/973/660/973/lviv-lwow-lemberg-cityscape-wallpaper-preview.jpg"
            alt="lviv"/>
        </a>
        <ScalableImage imgUrl="./img/web-programming-languages.webp" defaultWidth={500}/>
      </>
    );
  }
}

export default Content;
