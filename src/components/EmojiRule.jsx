import { useNavigate } from "react-router-dom";
const EmojiRule = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-[#9796f0] to-[#fbc7d4] flex flex-col justify-center h-screen items-center  p-10">
      <h1 className="font-bold text-4xl mb-4">
        Game Rules: Emoji Click Challenge 🎮🎭
      </h1>
      <ol className="list-decimal list-inside">
        <li>
          Click Unique Emojis: Each time you click an emoji, it must be one you
          haven't clicked before.
        </li>
        <li>
          Score Increases: If you click a new (not previously clicked) emoji,
          your score increases by 1.
        </li>
        <li>
          Winning Condition 🏆: If you successfully click all emojis exactly
          once, you win the game.
        </li>
        <li>
          Losing Condition ❌: If you click the same emoji more than once, the
          game ends.
        </li>
      </ol>
      <p className="mt-4">🎯 Goal: Click all emojis exactly once to win! 🚀</p>
      <button
        className="mt-3 px-4 py-2 rounded-md font-medium bg-[#ffce27] text-[#3d3d3d]"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default EmojiRule;
