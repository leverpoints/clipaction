import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormProps {
  name: string;
  email: string;
  currentApp: string;
  usageType: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAppChange: (value: string) => void;
  handleUsageChange: (value: string) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  currentApp,
  usageType,
  handleNameChange,
  handleEmailChange,
  handleAppChange,
  handleUsageChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="placeholder:text-muted-foreground"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
          className="placeholder:text-muted-foreground"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select value={currentApp} onValueChange={handleAppChange} required>
          <SelectTrigger className="text-muted-foreground">
            <SelectValue placeholder="What is your primary todo app? *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todoist">Todoist</SelectItem>
            <SelectItem value="things">Things</SelectItem>
            <SelectItem value="notion">Notion</SelectItem>
            <SelectItem value="clickup">ClickUp</SelectItem>
            <SelectItem value="linear">Linear</SelectItem>
            <SelectItem value="jira">Jira</SelectItem>
            <SelectItem value="asana">Asana</SelectItem>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select value={usageType} onValueChange={handleUsageChange} required>
          <SelectTrigger className="text-muted-foreground">
            <SelectValue placeholder="Do you use your todo app for work or personal? *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="both">Both</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={loading}>
          {loading ? "Loading..." : "Join Waitlist!"}
        </EnhancedButton>
      </motion.div>
      {/* <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
        <p>For any queries, reach out at </p>
        <Link
          href="https://x.com/blakssh"
          rel="noopener noreferrer"
          target="_blank">
          <FaXTwitter className="h-4 w-4 transition-all duration-200 ease-linear hover:text-yellow-200" />
        </Link>
        or
        <Link
          href="https://github.com/lakshaybhushan"
          rel="noopener noreferrer"
          target="_blank">
          <FaGithub className="ml-0.5 h-5 w-5 transition-all duration-200 ease-linear hover:text-yellow-200" />
        </Link>
      </motion.div> */}
    </motion.div>
  );
}
