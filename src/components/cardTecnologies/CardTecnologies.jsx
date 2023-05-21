import "./card.css";

const CardTecnologies = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default CardTecnologies;
