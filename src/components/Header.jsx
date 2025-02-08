// Header component that displays the game logo, title, and scores
const Header = ({ score, bestScore }) => {
  return (
    // Main container with padding, flexbox layout, and other styles for background and text
    <div className="p-4 flex justify-between items-center px-9 font-mono bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] text-white shadow-lg">
      {/* Container for the logo and title */}
      <div className="flex gap-2 items-center">
        {/* Game logo image with a source URL and alt text */}
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="Game Logo"
          className="game-logo"
        />
        {/* Game title displayed as a heading */}
        <h1 className="text-2xl font-bold">Emoji Game</h1>
      </div>
      {/* Container for displaying scores */}
      <div className="flex gap-5 items-center font-bold">
        {/* Total score display */}
        <p>Total Score: {score}</p>
        {/* Best score display */}
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
};

// Export the Header component for use in other files
export default Header;
