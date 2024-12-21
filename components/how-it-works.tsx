import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

export default function HowItWorks() {
  return (
    <motion.div
      className="w-full max-w-6xl px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <TextBlur
          className="text-3xl font-medium tracking-tighter sm:text-4xl"
          text="How It Works"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <img
            src="/step1.png"
            alt="Take a screenshot"
            className="w-28 h-28 object-cover rounded-lg"
          />
          <TextBlur
            className="text-xl font-medium"
            text="Take a screenshot"
          />
          <p className="text-muted-foreground text-center">
            Simply take a screenshot of anything you want to turn into a todo
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <img
            src="/step2.png"
            alt="AI Processing"
            className="w-28 h-28 object-cover rounded-lg"
          />
          <TextBlur
            className="text-xl font-medium"
            text="Add some context"
          />
          <p className="text-muted-foreground text-center">
            ClipAction AI automatically converts your screenshot into actionable todos
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <img
            src="/step3.png"
            alt="Manage Tasks"
            className="w-28 h-28 object-cover rounded-lg"
          />
          <TextBlur
            className="text-xl font-medium"
            text="Get back to work"
          />
          <p className="text-muted-foreground text-center">
            Review and manage your todos right in your favorite todo app
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
} 