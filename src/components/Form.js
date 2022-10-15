//App.jsから送られてきたpropsを括弧内に記述
const Form = (props) => {
  const { setCity, getWeather, city } = props;

  return (
    <form onSubmit={getWeather}>
      {/* onChangeを使うことでinputに入力されたデータをsetCityに伝えることができる */}
      {/* eはイベントパラメータでこの中にinputに関する情報が収められている */}
      {/* 大元であるeをsetCityに渡して、setCityの中でeからtargetへ渡して、さらにvalueに渡している */}
      {/* valueには初期値を設定できるので、初期値にApp.jsから渡してきたcityをセットして、初期値を空にしている */}
      {/* 初期値解説サイト https://magazine.techacademy.jp/magazine/28703 */}
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city} />
      <button type="submit">天気を取得</button>
    </form>
  );
};

export default Form;
