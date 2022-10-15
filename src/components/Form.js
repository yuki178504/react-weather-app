//App.jsから送られてきたpropsを括弧内に記述
const Form = (props) => {

  return (
    <form>
      {/* onChangeを使うことでinputに入力されたデータをsetCityに伝えることができる */}
      {/* eはイベントパラメータでこの中にinputに関する情報が収められている */}
      {/* 大元であるeをsetCityに渡して、setCityの中でeからtargetへ渡して、さらにvalueに渡している */}
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} />
      <button type="submit" onClick={props.getWeather}>天気を取得</button>
    </form>
  );
};

export default Form;
