const WinOrLoseCard = ({ isWin, score, resetGame }) => {
  // Determine the image URL based on whether the user has won or lost
  const imgUrl = isWin
    ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
    : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";

  // Determine the heading text based on the win/lose state
  const headingText = isWin ? "You Won" : "You Lose";

  return (
    // Main container for the WinOrLoseCard component
    <div className="bg-white text-white bg-opacity-30 border-[#ffffff30] rounded-lg shadow-lg p-4 flex items-center justify-center gap-4 min-w-[300px] hover:scale-105 transition duration-300 ease-in-out transform">
      {/* Container for the text and button elements */}
      <div className="flex flex-col justify-center items-center font-bold">
        {/* Display the heading text */}
        <h1 className="text-4xl mb-5">{headingText}</h1>

        {/* Display the score label */}
        <p className="text-2xl">Score</p>

        {/* Display the user's score with a specific style */}
        <p className="text-4xl text-[#6a59ff]">{score}/12</p>

        {/* Button to reset the game, calling the resetGame function on click */}
        <button
          onClick={resetGame}
          className="mt-3 px-4 py-2 rounded-md font-medium bg-[#ffce27] text-[#3d3d3d]"
        >
          Play Again
        </button>
      </div>

      {/* Display the image representing win or lose state */}
      <img src={imgUrl} alt="win or lose" className="h-[300px] w-[300px]" />
    </div>
  );
};
export default WinOrLoseCard;
