import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import courseQuickView from "../../../../OtherComponents/ToolTip/CourseQuickView";
import "./DevelopmentCard.css";

import CourseQuickView from "../../../../OtherComponents/ToolTip/CourseQuickView";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
export default function DevelopmentCard() {
  return (
    <Card className="developmentcpccard ">
      <Card.Img
        variant="top"
        className="development"
        src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
        srcset="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg 1x, https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg 2x"
      />

      <Card.Body className="cardbodydevelopmentcard">
        <div className="cardbodyinnerdiv1">
          <Card.Title className="developmentcpccardtitle">
            {" "}
            Sales Training Masterclass - Selling In A Consumer Business
          </Card.Title>
          <Card.Text className="developmentcpccardtext1">
            Learn how to sell your product or service in a consumer facing
            business. Learn sales skills for exponential growth.
          </Card.Text>
          <Card.Text className="developmentcpccardtext2">
            Salil Dhawan
          </Card.Text>
          <Card.Text className="developmentcpccardtext4">
            <span>5.0</span>
            <span>
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
            </span>
            <span>(10)</span>
          </Card.Text>
          <Card.Text className="developmentcpccardtext3">
            <span>22 total hour</span>
            <span>
              <ul>
                <li>155 lectures </li>
                <li>All Levels</li>
              </ul>
            </span>
          </Card.Text>
        </div>
        <div className="cardbodyinnerdiv2">₹525</div>
      </Card.Body>
    </Card>
  );
}
