function Gameboard() {
  let gameboardSideSize = 10;
  let arraySize = [...Array(Math.pow(gameboardSideSize, 2)).keys()];
  let GameboardCoordinates = arraySize.map((num) => [Math.ceil((num + 1) / gameboardSideSize), (num % gameboardSideSize) + 1]);

  let style = {
    gridConfiguration: {
      display: "grid",
      gridTemplateColumns: `repeat(${gameboardSideSize},50px)`,
      gridTemplateRows: `repeat(${gameboardSideSize},50px)`,
      justifyItems: "center",
      alignItems: "center",
    },
    border: {
      border: "1px solid black",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div>
      <div style={style.gridConfiguration}>
        {GameboardCoordinates.map((num) => (
          <div style={style.border}>{num[0] + "-" + num[1]}</div>
        ))}
      </div>
    </div>
  );
}

export default Gameboard;
