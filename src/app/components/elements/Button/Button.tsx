import {
  cloneElement,
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  useCallback,
} from "react";

import styles from "./Button.module.scss";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  as?: "button" | "span";
  color?: "primary" | "gray";
  width?: "full" | undefined;
  hasBorder?: boolean;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  children: ReactNode;
};
export function Button({
  as = "button",
  type = "button",
  color = "primary",
  hasBorder = false,
  width = undefined,
  rightIcon,
  leftIcon,
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = `${styles.button} ${hasBorder ? styles._hasBorder : ""} ${
    color === "primary" ? styles._primary : styles._gray
  } ${rightIcon || leftIcon ? styles._hasIcon : ""} ${width === "full" ? styles._winthFull : ""}`;

  const ButtonInner = useCallback(
    () => (
      <>
        {leftIcon && cloneElement(leftIcon, { className: styles.leftIcon })}
        <span className={styles.button__text}>{children}</span>
        {rightIcon && cloneElement(rightIcon, { className: styles.rightIcon })}
      </>
    ),
    [leftIcon, rightIcon, children],
  );

  return as === "button" ? (
    <button type={type} className={buttonClassName} {...props}>
      <ButtonInner />
    </button>
  ) : (
    <span className={buttonClassName} {...props}>
      <ButtonInner />
    </span>
  );
}
