import html2canvas from "html2canvas";
import { useState } from "react";
import { span } from "./proyecto1.css";

const MostrarMeme = () => {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = (valor) => {
    setLinea1(valor.target.value);
  };
  const onChangeLinea2 = (valor) => {
    setLinea2(valor.target.value);
  };
  const onChangeImagen = (valor) => {
    setImagen(valor.target.value);
  };
  const onClickBoton = (valor) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <>
      <div className="title">
        <h1>Meme Generator</h1>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-7">
            <div className="fix">
              <select className="form-control" onChange={onChangeImagen}>
                <option value="" key=""></option>
                <option value="fire" key="">
                  Fire
                </option>

                <option value="futurama" key="">
                  Futurama
                </option>

                <option value="history" key="">
                  History
                </option>

                <option value="matrix" key="">
                  Matrix
                </option>

                <option value="philosoraptor" key="">
                  Philosoraptor
                </option>

                <option value="smart" key="">
                  Smart
                </option>
              </select>

              <br />

              <input
                className="form-control"
                onChange={onChangeLinea1}
                type="text"
                placeholder="Línea 1"
              />
              <br />

              <input
                className="form-control"
                onChange={onChangeLinea2}
                type="text"
                placeholder="Línea 2"
              />
              <br />

              <button className="btn button" onClick={onClickBoton}>
                Exportar
              </button>
              <br />
            </div>
          </div>
          <div className="col-md-5">
            <div className="meme" id="meme">
              <span>{linea1}</span>
              <br />

              <span>{linea2}</span>
              <br />

              <img src={"/img/" + imagen + ".jpg"} height="400px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostrarMeme;
