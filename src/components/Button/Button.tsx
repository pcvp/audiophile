import classNames from "classnames";
import { ComponentPropsWithRef, FC } from "react";

interface ButtonProps {
  kind: "raised" | "outline" | "link";
  appearance: "primary" | "secondary";
}

const getButtonClassNames = (props: ButtonProps): string => {
  return classNames(
    "w-auto flex justify-center items-center p-3 tracking-wide uppercase text-white cursor-pointer transition ease-in duration-500 text-sm font-bold",
    {
      "bg-primary-900 hover:bg-primary-500":
        props.kind == "raised" && props.appearance == "primary",
      "bg-black hover:bg-gray-500 ":
        props.kind == "raised" && props.appearance == "secondary",
      "border border-black text-black": props.kind == "outline",
    }
  );
};

const Button: FC<ComponentPropsWithRef<"button"> & ButtonProps> = (props) => {
  const { kind, appearance } = props;
  return (
    <button
      className={[
        getButtonClassNames({ kind, appearance }),
        props.className,
      ].join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
