
import * as React from "react";
import { LucideProps, icons } from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  const LucideIcon = icons[name] || icons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;
