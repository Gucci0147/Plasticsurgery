import React from "react";
import { Link } from "react-router-dom";

const Surgical = () => {
  return (
    <>
    <div className="container-fluid surg d-block text-center pt-5">
      <h1 className="text-white fw-bold">SURGICAL</h1>
      <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL</span>
    </div>

    <section className="mb-10 text-center pt-5">
    <div className="row gx-lg-5 pt-5 mx-2">
        <div className="col-lg-4 mb-6 mb-lg-0">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_1-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="coltt">BODY PROCEDURES</h5>
              <p className="coltxt card-text">
              San Diego cosmetic surgeon, 
              Dr, discusses his body 
              contouring procedures…
              </p>
              <a href="/bodyprocedure" className="butt btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>


        <div className="col-lg-4 mb-6 mb-lg-0">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_2-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
            <h5 className="coltt">FACIAL PROCEDURES</h5>
              <p className="coltxt card-text">
                Dr can perform facelifts
                under local anesthesia with light
                 sedation or general…
              </p>
              <a href="/facialprocedure" className="btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-6 mb-lg-0">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_3-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
            <h5 className="coltt">BREAST PROCEDURES</h5>
              <p className="coltxt card-text">
                  Dr performs breast 
                  augmentation under general anesthesia 
                  and you may…
              </p>
              <a href="/breastprocedure" className="btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-6 mb-lg-0 pt-4">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_4-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="coltt">BUTTOCKS</h5>
              <p className="coltxt card-text">
                Tongue t-bone cow shoulder jerky cupim.
                Cupim cow pork chop pastrami tri-tip t-bone…
              </p>
              <a href="/buttocks" className="btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-6 mb-lg-0 pt-4">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_5-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
             <h5 className="coltt">SKIN CARE</h5>
              <p className="coltxt card-text">
                  Ham brisket meatloaf pork belly. 
                  Ham frankfurter salami fatback sirloin. 
                  Ham hock biltong…
              </p>
              <a href="/skincare" className="btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-6 mb-lg-0 pt-4">
          <div className="card rounded-6">
            <div className="bg-image hover-overlay ripple mt-4 mx-4 shadow-3-strong" data-mdb-ripple-color="light">
              <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_6-600x400.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
            <div className="card-body">
             <h5 className="coltt">COOLSCULPTING</h5>
              <p className="coltxt card-text">
                 Bresaola porchetta t-bone chuck ground 
                 round. Venison shank boudin tenderloin 
                 pork loin…
              </p>
              <a href="/coolsculpting" className="btn btn-white btn-rounded text-warning">Read more</a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  );
}

export default Surgical;