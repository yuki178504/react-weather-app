import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import Title from './components/Title'; //importは取り込むという意味なのでこのコンポーネントを取り込んだという意味になる
import { useState } from "react";
import axios from "axios";

function App() {
  //左辺にあるcityがstateでデータの保管場所。右辺のsetCityがデータを書き込んだり、操作したりする仕組み。
  //このsetCityを使うことでcity内のデータを操作することができる。
  //useStateの括弧の中が初期値になる
  const [ city, setCity ] = useState(""); 
  const [ results, setResults ] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  const getWeather = (e) => {
    //Formを送信するときにリロードをするのを止めるために下記のメソッドを使用する
    //https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae 参考サイト
    e.preventDefault();
    //取得する場合はget。送る場合はpostなどそれぞれの規格を記述する。
    axios.get(`http://api.weatherapi.com/v1/current.json?key=86a743cb49804db7a43193356221410&q=${city}&aqi=no`)
    //thenはそして、その後でという意味でAPIにデータを送った後の処理を書く
    //resはreponceの略でAPIから送られてきたデータが入っている。
      .then(res => {
        //setResultsを使って、Resultsにデータを書き込んでいる
        //これで受け取ったデータがresultsに保管されることになる
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
      }) //console.logの括弧の中に確認したいデータを入れる
  }


  return (
    <div className="App">
      <Title /> {/* 大文字で書くことでこれがReactのタグであることをReactに伝えている */}
      <Form setCity={setCity} getWeather={getWeather} /> {/* 名前={渡すもの}　という感じになっているので、これにアクセスするにはprops.名前になる　*/ }
      <Results results={results} />
    </div>
  );
};

export default App;
