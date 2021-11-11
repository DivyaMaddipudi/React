import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
              
              <Card imgLink="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="React JS" subText="This course includes all the basics of React of 20hrs of courses" buttonText="Explore Now" />

            </div>
            <div className="col-4">
            <Card imgLink="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Spring Boot" subText="This course includes all the basics of Spring Boot of 20hrs of courses" buttonText="Explore Now" />
            </div>
            <div className="col-4">
            <Card imgLink="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Learn Go" subText="This course includes all the basics of Go of 20hrs of courses" buttonText="Explore Now" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default CardSection;