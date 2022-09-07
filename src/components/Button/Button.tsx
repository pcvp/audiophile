import classNames from "classnames";
import { ComponentPropsWithRef, FC } from "react";

interface ButtonProps {
  kind: "raised" | "outline" | "link";
}

const getButtonClassNames = (props: ButtonProps): string => {
  return classNames(
    "w-auto flex justify-center items-center p-3 tracking-wide uppercase text-white cursor-pointer transition ease-in duration-500 ",
    {
      "bg-primary-900 hover:bg-primary-500": props.kind == "raised",
      "border border-black text-black": props.kind == "outline",
    }
  );
};

const Button: FC<ComponentPropsWithRef<"button"> & ButtonProps> = (props) => {
  const { kind } = props;
  return (
    <button
      className={[getButtonClassNames({ kind }), props.className].join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
