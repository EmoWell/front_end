import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../Utilities/cn";

export const LandingPageText = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  console.log("words", wordsArray);
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 20,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-24">
        <div className=" dark:text-white text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
