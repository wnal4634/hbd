import confetti from "https://esm.run/canvas-confetti@1";

function App() {
    function onClick() {
        confetti({
            particleCount: 150,
            spread: 60,
        });
    }

    return (
        <div>
            <button className="button" onClick={onClick}>
                <span>🎉</span>
                <span>Like</span>
            </button>
        </div>
    );
}

export default App;
