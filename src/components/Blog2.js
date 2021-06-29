import React, { Component } from "react";
import "../style/blogs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBlog1 from "./CardBlog1";
import CardBlog3 from "./CardBlog3";
import CardBlog4 from "./CardBlog4";

class Blog2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="textCont">
          <h1 className="mainTitle">Why Exercise Is Wise</h1>

          <img
            className="firstImg"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/group-of-men-exercising-push-ups-in-a-health-club-royalty-free-image-1584097580.jpg"
            alt="Advice"
          />
          <p className="paragraphs">
            You've probably heard countless times how exercise is "good for you." But did you know that it can help you
            feel good too? Getting the right amount of exercise can rev up your energy levels and even help improve your
            mood.
          </p>

          <h4 className="subTitles">Rewards and Benefits</h4>
          <p className="paragraphs">
            Experts recommend that teens get 60 minutes or more of moderate to vigorous physical activity each day. Here
            are some of the reasons: Exercise benefits every part of the body, including the mind. Exercising causes the
            body to make chemicals that can help a person feel good. Exercise can help people sleep better. It can also
            help some people who have mild depression and low self-esteem. Plus, exercise can give people a real sense
            of accomplishment and pride at having achieved a goal — like beating an old time in the 100-meter dash.
            Exercise helps people lose weight and lower the risk of some diseases. Exercising regularly lowers a
            person's risk of developing some diseases, including obesity, type 2 diabetes, and high blood pressure.
            Exercise also can help keep your body at a healthy weight. Exercise can help a person age well. This may not
            seem important now, but your body will thank you later. For example, osteoporosis (a weakening of the bones)
            can be a problem as people get older. Weight-bearing exercise — like jumping, running, or brisk walking —
            can help keep bones strong. The three parts of a balanced exercise routine are: aerobic exercise, strength
            training, and flexibility training.
          </p>
          <h4 className="subTitles">Strength Training</h4>
          <p className="paragraphs">
            The heart isn't the only muscle to benefit from regular exercise. The other muscles in your body enjoy
            exercise too. When you use your muscles, they become stronger. Strong muscles are also a plus because they
            support your joints and help prevent injuries. Muscle also use more energy than fat does, so building your
            muscles will help you burn more calories and maintain a healthy weight. You don't have to lift weights to
            make your muscles and bones stronger. Different types of exercise strengthen different muscle groups, for
            example: For arms, try rowing or cross-country skiing. Pull-ups and push-ups, those old gym class standbys,
            are also good for building arm muscles. For strong legs, try running, biking, rowing, or skating. Squats and
            leg raises also work the legs. For abdominal and core strength, you can't beat rowing, yoga or pilates,
            planks and crunches.
          </p>
          <img
            className="secondImg"
            src="https://liverightwithlr.com/media/k2/items/cache/39eee751af30032eeece2f48de2de4ba_XL.jpg"
            alt="advice"
          />
          <h4 className="subTitles">Flexibility Training</h4>
          <p className="paragraphs">
            Strengthening the heart and other muscles isn't the only important goal of exercise. Exercise can also help
            the body stay flexible, meaning that your muscles and joints stretch and bend easily. Being flexible may
            also help improve a person's sports performance. Some activities, like dance or martial arts, require great
            flexibility. But increased flexibility also can help people perform better at other sports, such as soccer
            or lacrosse. Sports and activities that encourage flexibility are easy to find. Martial arts like karate,
            ballet, gymnastics, and yoga are good choices. Stretching after your workout will also help you improve your
            flexibility.
          </p>

          <h4 className="subTitles">What's Right for Me?</h4>
          <p className="paragraphs">
            One of the biggest reasons people drop an exercise program is lack of interest: If what you're doing isn't
            fun, it's hard to keep it up. The good news is there are tons of different sports and activities to try to
            see which one inspires you. When picking the right type of exercise, it can help to consider your workout
            personality. For example, do you like to work out alone and on your own schedule? If so, solo sports like
            running, biking, or snowboarding could be for you. Or do you like the shared motivation and companionship
            that comes from being part of a team? School sports, intramural leagues, club teams, and pick-up games are
            great ways to stay active with others. You also need to plan around practical considerations, such as
            whether your chosen activity is affordable and available to you.
          </p>
        </div>
        <Container className="newContainer" fluid>
          <p className="alsoRead">You Can Also Read ..</p>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <CardBlog1 />
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

export default Blog2;
