import styles from "./Button.module.css";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost" | "outline" | "danger" | "theme-toggle";
  small?: boolean;
};

export function Button({
  variant = "primary",
  small = false,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[`btn-${variant}`],
    small && styles["btn-sm"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} />;
}
