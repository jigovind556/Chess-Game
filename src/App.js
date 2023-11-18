import "./App.css"
import ChessBoard from "./components/board/board";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">chess Game</header> */}
      <main>
        <section className="board">
          
          <ChessBoard/>
        </section>
      </main>
    </div>
  );
}

export default App;
