


import octvv7 from "../img/catalogAuto/octvv7.jpg";
import porsche  from "../img/catalogAuto/porsche cayene.jpg";
import amg from "../img/catalogAuto/aamg_gt63.jpg";
import bmw from "../img/catalogAuto/m5.jpg";
import rolls from "../img/catalogAuto/rolls.jpg";
import jetta from "../img/catalogAuto/jetta.jpg";



const Auto = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Stoc nou Auto</h2>
        <ul className="projects">
          <li className="project">
            <img src={octvv7} alt="Porsche Cayenne Turbo GT" className="project__img" />
            <h3 className="project__title">Octavia A7 Vrs</h3>
            <h4 className="price">50000 lei</h4>
          </li>

          <li className="project">
            <img src={porsche } alt="Porsche Cayene" className="project__img" />
            <h3 className="project__title">Porsche Cayene Turbo GT</h3>
            <h4 className="price">45000 lei</h4>
          </li>
           <li className="project">
            <img src={amg} alt="Mercedes Amg GT 63" className="project__img" />
            <h3 className="project__title">Mercedes Amg GT 63 </h3>
            <h4 className="price">70000 lei</h4>
          </li>
          <li className="project">
            <img src={bmw} alt="BMW M5 " className="project__img" />
            <h3 className="project__title">BMW M5 Competition </h3>
            <h4 className="price">75000 lei</h4>
          </li>
          <li className="project">
            <img src={rolls} alt="Rolls " className="project__img" />
            <h3 className="project__title">Rolls </h3>
            <h4 className="price">120000 lei</h4>
          </li>
          <li className="project">
            <img src={jetta} alt="Jetta SE " className="project__img" />
            <h3 className="project__title">Jetta SE </h3>
            <h4 className="price">50000 lei</h4>
          </li>
          

         
         </ul>
      </div>
    </main>
  );
} 

export default Auto;
