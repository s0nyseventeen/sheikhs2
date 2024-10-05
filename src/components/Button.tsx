import className from "classnames";

export default function Button({ children, plain, rounded }) {
  const classes = className("pointer py-6", {
    "border-2 border-black border-solid px-14 text-xl": plain,
    "rounded-full": rounded,
  });
  return <button className={classes}>{children}</button>;
}
