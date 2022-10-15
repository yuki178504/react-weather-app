
const Results = (props) => {
  return (
    <div>
      {/* ロジカルオペレーターによって、左辺の値が正しければ、右辺を表示するというif文になっている */}
      { props.results.country && <div>{ props.results.country }</div> }
      { props.results.cityName && <div>{ props.results.cityName }</div> }
      { props.results.temperature && <div>{ props.results.temperature }</div> }
      { props.results.conditionText && <div>{ props.results.conditionText }</div> }
      { props.results.icon && <img src={ props.results.icon } /> }
    </div>
  );
};

export default Results;
