import { emojisList } from "../data/EmojiList";
import EmojiCard from "./EmojiCard";
import { useState } from "react";
import Header from "./Header";
import WinOrLoseCard from "./WinOrLoseCard";
import { useNavigate } from "react-router-dom";

const EmojiGame = () => {
  // Initialize the emojis array with the emojisList array, and create a Set to keep track of the emojis that have been clicked
  const [emojis, setEmojis] = useState(emojisList);
  const [clickedEmojisSet, setClickedEmojisSet] = useState(new Set());
  // Initialize the score to 0, and the best score to 0
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // Initialize the gameOver flag to false, and the isWin flag to false
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Function to shuffle the array of emojis
  const shuffleArray = (array) => {
    // Create a new array with the same elements as the original array, and shuffle it
    const newEmojis = array.slice().sort(() => Math.random() - 0.5);
    // Set the new array as the state
    setEmojis(newEmojis);
  };

  // Function to handle when an emoji is clicked
  const handleClick = (emojiId) => {
    // If the emoji has been clicked before, set the gameOver flag to true
    if (clickedEmojisSet.has(emojiId)) {
      setGameOver(true);
      // Update the best score if the current score is better
      setBestScore((prevBest) => Math.max(prevBest, score));
    } else {
      // If the emoji hasn't been clicked before, add it to the Set of clicked emojis
      const newClickedEmojisSet = new Set(clickedEmojisSet).add(emojiId);
      // Update the Set of clicked emojis
      setClickedEmojisSet(newClickedEmojisSet);
      // Increase the score by 1
      setScore((prevScore) => prevScore + 1);

      // If the number of clicked emojis is equal to the number of emojis in the array, the game is over
      if (newClickedEmojisSet.size === emojis.length) {
        setIsWin(true);
        // Set the gameOver flag to true
        setGameOver(true);
        // Set the score to the number of emojis in the array
        setScore(emojis.length);
        // Update the best score to the number of emojis in the array
        setBestScore(emojis.length);
      }
    }
  };

  // Function to reset the game
  const resetGame = () => {
    // Reset the Set of clicked emojis to an empty Set
    setClickedEmojisSet(new Set());
    // Reset the score to 0
    setScore(0);
    // Reset the gameOver flag to false
    setGameOver(false);
    // Reset the isWin flag to false
    setIsWin(false);
  };

  // JSX
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div className="bg-gradient-to-br from-[#9796f0] to-[#fbc7d4] flex flex-col justify-center min-h-[calc(100vh-80px)] items-center p-10">
        {
          // If the game is over, display a WinOrLoseCard with the score and a button to reset the game
          gameOver ? (
            <WinOrLoseCard isWin={isWin} score={score} resetGame={resetGame} />
          ) : (
            // If the game is not over, display a list of emojis
            <>
              <ul className="flex flex-wrap justify-center gap-10">
                {emojis.map((emoji) => (
                  <EmojiCard
                    // Pass the emoji object to the EmojiCard component
                    key={emoji.id}
                    emoji={emoji}
                    // Pass the shuffleArray function to the EmojiCard component
                    shuffleArray={shuffleArray}
                    // Pass the handleClick function to the EmojiCard component
                    handleClick={() => handleClick(emoji.id)}
                  />
                ))}
              </ul>
              <button
                // Navigate to the rules page when the button is clicked
                onClick={() => navigate("/rules")}
                className="font-medium mt-auto px-4 py-2 rounded-md bg-[#ffce27] text-[#3d3d3d]"
              >
                Rules
              </button>
            </>
          )
        }
      </div>
    </>
  );
};
export default EmojiGame;
