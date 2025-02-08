import { emojisList } from "../data/EmojiList";

const EmojiCard = ({ emoji, shuffleArray, handleClick }) => {
  // EmojiCard component takes an emoji object, a function to shuffle the array of emojis and a function to handle the click event

  // when the EmojiCard is clicked, it shuffles the array of emojis and calls the handleClick() function with the id of the emoji as an argument
  const handleClickOnCard = () => {
    shuffleArray(emojisList);
    handleClick(emoji.id);
  };

  // render a list item for the emoji
  return (
    <li
      // add an event listener to the list item to handle the click event
      onClick={handleClickOnCard}
      // set the background color, border, and other styles for the list item
      className="bg-white bg-opacity-30 border-[#ffffff30] rounded-lg shadow-lg p-4 flex flex-col items-center gap-4 w-[300px] hover:scale-105 transition duration-300 ease-in-out transform cursor-pointer"
    >
      {/* render the emoji image */}
      <img src={emoji.emojiUrl} alt={emoji.emojiName} />
    </li>
  );
};
export default EmojiCard;
