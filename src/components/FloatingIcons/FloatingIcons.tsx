export const FloatingIcons = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>My Stack</h2>
      <div className="icon-container">
        <img
          className="icon1"
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/javascript--v1.png"
        />
        <img
          className="icon2"
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/typescript.png"
          alt="typescript"
        />
        <img
          className="icon3"
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/react-native.png"
          alt="react-native"
        />
        <img
          className="icon4"
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/nestjs.png"
          alt="nestjs"
        />
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/amazon-web-services.png"
          alt="amazon-web-services"
        />
        <img
          className="icon5"
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/docker.png"
          alt="docker"
        />
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/google-cloud.png"
          alt="google-cloud"
        />
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://img.icons8.com/color/96/java-coffee-cup-logo.png"
          alt="java-coffee-cup-logo"
        />
        {/* Agrega más iconos según sea necesario */}
      </div>
    </div>
  );
};
