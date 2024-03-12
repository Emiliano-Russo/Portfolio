const myphoto = require("../../assets/me4.jpg");

export const Item1 = () => {
  return (
    <div id="item1" className="grid-item leftToRight">
      <img
        src={myphoto}
        style={{
          width: "190px",
          height: "190px",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center 30%", // Esta es la posición predeterminada
        }}
        alt="Descripción de la imagen"
      />
    </div>
  );
};
