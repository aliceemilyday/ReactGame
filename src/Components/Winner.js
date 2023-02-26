import './Winner.css';

function Winner() {
    return (
        <div className='winner'>
            <h1>Winner!</h1>
            <button type="button" onClick={() => window.location.reload()}>RESTART</button>
        </div>
    );
}

export default Winner;