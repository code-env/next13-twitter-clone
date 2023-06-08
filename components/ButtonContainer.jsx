"use client";

const ButtonContainer = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline,
  rounded,
  black,
}) => {
  return (
    <button
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        font-semibold
        hover:opacity-80
        transition
        border-2
        outline-none
        px-4
        py-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          secondary
            ? "bg-sky-500"
            : "bg-white" || black
            ? "bg-black"
            : "bg-white"
        }
        ${
          secondary
            ? "text-white"
            : "text-black" || black
            ? "text-white"
            : "text-black"
        }
        ${
          secondary
            ? "border-sky-500"
            : "border-black" || black
            ? "border-black"
            : "border-transparent"
        }
        ${large ? "text-xl" : "text-md"}
        ${rounded ? "rounded-full" : "rounded"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonContainer;
