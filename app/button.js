export default function Button({ children, width }) {
  let inlineStyle = width ? { width: `${width}px` } : {};
  return (
    <button
      className="bg-orange-400 rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase cursor-pointer"
      style={inlineStyle}
    >
      {children}
    </button>
  );
}
