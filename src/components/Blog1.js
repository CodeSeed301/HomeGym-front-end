import React, { Component } from "react";
import "../style/blogs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBlog2 from "./CardBlog2";
import CardBlog3 from "./CardBlog3";
import CardBlog4 from "./CardBlog4";

class Blog1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="textCont">
          <h1 className="mainTitle">Fitness Advice That Doesn't Work</h1>
          <img
            className="firstImg"
            src="https://healthtoday.co.za/wp-content/uploads/2021/01/Battle-ropes-Cordes-ondulatoires-EVO-Fitness-1200x675-1.jpg"
            alt="Advice"
          />
          <p className="paragraphs">
            Ignore bad fitness advice to make the most out of your time at the gym. You can’t walk into a gym these days
            without hearing someone spout “surefire” exercise tips. But with all the bad advice floating around, teasing
            out the effective training tips from the fitness myths can be more difficult than getting through a grueling
            workout. To help you sort fitness fact from fiction, here is some of the most common fitness advice that
            doesn’t work — along with expert tips that do
          </p>

          <h4 className="subTitles">Bad advice: Crunches are the best way to burn belly fat.</h4>
          <p className="paragraphs">
            The reality: “Crunches cause your abdominal muscles to contract, which will increase their strength and
            endurance, [but] crunches burn very few calories,” says Michele Olson, PhD, a professor of exercise science
            at the Human Performance Laboratory at Auburn University at Montgomery in Alabama. You need to burn 3,500
            calories to lose just 1 pound of fat, and doing 50 or more crunches won’t even come close to burning that
            much. A better workout tip: “A flat abdominal area with little fat covering the muscles requires a combined
            effort from an appropriate diet and other calorie-burning workout activities like jogging or spinning
            classes,” Olson says. The takeaway? Combine cardio with ab-strengthening exercises and a healthy diet, and
            you'll have a flat belly in no time.
          </p>
          <h4 className="subTitles">Bad advice: Static stretching will always prevent injuries.</h4>
          <p className="paragraphs">
            The reality: “Stretching cold muscles, tendons, and ligaments can actually harm them since they are
            relatively stiff to begin with,” Olson says. “Instead, warm up your muscles at the beginning of a workout by
            doing dynamic movements, such as walking briskly for five minutes, performing half-squats with just your
            body weight, and marching with high knees. These activities will increase circulation of oxygen-rich blood
            to your muscles and literally warm them — increase their metabolism, which produces heat. Save static
            stretching for the comedown part of your workout, when your muscles are very warm and extensible.”
          </p>
          <img
            className="secondImg"
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="advice"
          />
          <h4 className="subTitles">Bad advice: All you need for a complete exercise program is cardio and weights.</h4>
          <p className="paragraphs">
            The reality: “Fitness is actually measured in five dimensions: strength, speed, agility, endurance, and
            flexibility,” says certified personal trainer Amanda L. Ebner, MA, MEd, a FitOrbit.com Top 10 Trainer. “If
            you focus only on the old-fashioned cardio-and-weights duality, you will miss out on some amazing workout
            alternatives, such as power lifting (strength), high-intensity interval training (speed), team sports
            (agility), marathon/triathlon training (endurance), and yoga (flexibility).” Among her tips: Try to identify
            the areas of fitness in which you are weakest and take up a workout activity targeted at building those
            missing skills.
          </p>
          <br></br>
          <br></br>
          <h4 className="subTitles">Bad advice: Weight machines prevent injuries better than free weights.</h4>
          <p className="paragraphs">
            The reality: “Weight machines are generally designed based on the dimensions of the average-sized male,
            which can place your knees, back, and shoulders into positions where muscles are not pulling at the proper
            angle,” Olson says. “This can harm your joints.” She adds that one advantage of using free weights for the
            strength-training portion of your workout is that you can lift, press, and curl them with your natural range
            of motion. Another tip: “Free weights also engage more of your spine-supporting core muscles and help
            improve balance, preventing common lifestyle muscle pulls, joint strain, and falls,” she says.
          </p>
          <h4 className="subTitles">Bad advice: No pain, no gain.</h4>
          <p className="paragraphs">
            The reality: No reliable fitness tip should advocate true pain as part of workout success. “There is a
            difference between being a little sore and being injured,” Maina says. “You should feel a slight fatigue or
            mild discomfort following a good workout, but you shouldn’t feel so sore that it affects your daily
            functioning.”
          </p>
        </div>
        <Container className="newContainer" fluid>
          <p className="alsoRead">You Can Also Read ..</p>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <CardBlog2 />
            </Col>
            <Col xs lg="4">
              <CardBlog3 />
            </Col>
            <Col xs lg="4">
              <CardBlog4 />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog1;
