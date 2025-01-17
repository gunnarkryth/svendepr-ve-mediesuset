export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      {children}
    </button>
  );
};
