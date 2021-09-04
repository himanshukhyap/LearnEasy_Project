import React from "react";

import { AiFillStar } from "react-icons/ai";
import "./FrequentlyBoughtTogether.css";

export default function FrequentlyBoughtTogether() {
  return (
    <div className="card FrequentlyBoughtTogether">
      <div className="row">
        <div className="col-2">
          <img
            className="border border-secondary border-start-0"
            src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
            alt="..."
          />
        </div>
        <div className="col-10">
          <div className="card-body d-flex justify-content-between p-2">
            <div>
              <h5 className="card-text m-0">
                <b>
                  {" "}
                  Sales Training Masterclass - Selling In A Consumer Business
                </b>{" "}
              </h5>

              <p className="card-text m-0">
                <small className="text-muted">Salil Dhawan</small>
              </p>
              <p className="card-text m-0">
                <span className="text-warning">5.0</span>
                <span>
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" /> <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                </span>
                <span>(10)</span>
              </p>
            </div>
            <div className="">
              <b>₹5125</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Card className="developmentcpccard ">
    //   <Card.Img
    //     variant="top"
    //     className="development"
    //     src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
    //     srcset="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg 1x, https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg 2x"
    //   />

    //   <Card.Body className="cardbodydevelopmentcard">
    //     <div className="cardbodyinnerdiv1">
    //       <Card.Title className="developmentcpccardtitle">
    //         {" "}
    //         Sales Training Masterclass - Selling In A Consumer Business
    //       </Card.Title>
    //       <Card.Text className="developmentcpccardtext1">
    //
    //       </Card.Text>
    //       <Card.Text className="developmentcpccardtext2">
    //         Salil Dhawan
    //       </Card.Text>
    //       <Card.Text className="developmentcpccardtext4">
    //         <span>5.0</span>
    //         <span>
    //           <AiFillStar className="developmentcpccarticons" color="#b4690e" />
    //           <AiFillStar className="developmentcpccarticons" color="#b4690e" />
    //           <AiFillStar className="developmentcpccarticons" color="#b4690e" />
    //           <AiFillStar className="developmentcpccarticons" color="#b4690e" />
    //           <AiFillStar className="developmentcpccarticons" color="#b4690e" />
    //         </span>
    //         <span>(10)</span>
    //       </Card.Text>
    //       <Card.Text className="developmentcpccardtext3">
    //         <span>22 total hour</span>
    //         <span>
    //           <ul>
    //             <li>155 lectures </li>
    //             <li>All Levels</li>
    //           </ul>
    //         </span>
    //       </Card.Text>
    //     </div>
    //     <div className="cardbodyinnerdiv2">₹525</div>
    //   </Card.Body>
    // </Card>
  );
}
