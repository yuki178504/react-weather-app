
const Results = (props) => {
  //分割代入を使うことで、それぞれのオブジェクトに右辺のprops.resultsを代入している
  //こうすることで下記のようにわざわざprops.resultsと先頭につけなくてもいいようになる
  const { country, cityName, temperature, conditionText, icon } = props.results;


  return (
    <div>
      {/* 分割代入を使わない書き方 */}
      {/* ロジカルオペレーターによって、左辺の値が正しければ、右辺を表示するというif文になっている */}
      {/* { props.results.country && <div>{ props.results.country }</div> } */}
      {/* { props.results.cityName && <div>{ props.results.cityName }</div> } */}
      {/* { props.results.temperature && <div>{ props.results.temperature }</div> } */}
      {/* { props.results.conditionText && <div>{ props.results.conditionText }</div> } */}
      {/* { props.results.icon && <img src={ props.results.icon } /> } */}
      {/* 分割代入を使った書き方 */}
      { country && <div>{ country }</div> }
      { cityName && <div>{ cityName }</div> }
      { temperature && <div>{ temperature }</div> }
      { conditionText && <div>{ conditionText }</div> }
      { icon && <img src={ icon } alt="アイコン" /> }
    </div>
  );
};

export default Results;
