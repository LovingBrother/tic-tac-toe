
export default function Reset(props) {
  return (
    <div className="container">
      <h2>{props.winner} won the game</h2>
      <p>{props.message}</p>
      <div className="button" onClick={props.onResetClick}>Reset</div>
    </div>
  );
}
