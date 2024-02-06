import React from "react";

export function AboutUs() {
  return (
    <div id="aboutUs">
      <div id="form-container">
        <div id="imagenes">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="725"
                height="725"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=bogota+-+colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{
                  frameborder: "0",
                  scrolling: "no",
                  marginheight: "0",
                  marginwidth: "0",
                  height: "25rem",
                  width: "35rem",
                }}
              ></iframe>
              <a href="https://online-timer.me/"></a>
              <br />
              <a href="https://timenowin.net/"></a>
              <br />
            </div>
          </div>
        </div>

        <div id="inputPlaces">
          <h1 className="big-title2">Comunicate con nosotros</h1>
          <hr />
          <form action="">
            <p>Nombre :</p>
            <input type="text" name="" id="name" />
            <p>Correo electronico :</p>
            <input type="text" name="" id="email" />
            <p>Mensaje :</p>
            <textarea
              type="text"
              name=""
              id="textArea"
              cols="30"
              rows="30"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}
