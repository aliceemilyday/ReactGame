import './GameOver.css';

function GameOver() {

    return (
        <div className='gameOver'>
            <h1>Game Over</h1>
            <button type="button" onClick={() => window.location.reload()}>RESTART</button>
        </div>
    );
}

export default GameOver;