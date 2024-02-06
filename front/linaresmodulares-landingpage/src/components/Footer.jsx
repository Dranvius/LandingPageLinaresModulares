export function Footer() {
  return (
    <>
      <div className="footer-links">
        <div className="footer-container">
          <ul>
            <li>
              <h3>Contacto</h3>
            </li>
            <li>
              <p>
                <img
                  src="../src/img/icon_whatsapp.png"
                  alt=""
                  style={{ marginRight: "5px", width: "8%" }}
                />
                +57 3117306216
              </p>
            </li>
            <li>
              <h3>Ubicación</h3>
            </li>
            <li>
              <p>
                <img
                  src="../src/img/icon_location.png"
                  alt=""
                  style={{ marginRight: "5px", width: "8%" }}
                />
                Bogotá - Colombia
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Atención</h3>
            </li>
            <li>
              <p>
                <img
                  src="../src/img/icon_time 3.png"
                  alt=""
                  style={{ marginRight: "5px", width: "8%" }}
                />
                LUN - VIE 8AM/6PM
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="end">
        <h6
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "15px",
            backgroundColor: 'red'
          }}
        >
          Linares modulare derechos reservados
        </h6>
      </div>
    </>
  );
}
