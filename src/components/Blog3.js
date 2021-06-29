import React, { Component } from "react";
import "../style/blogs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBlog1 from "./CardBlog1";
import CardBlog2 from "./CardBlog2";
import CardBlog4 from "./CardBlog4";

class Blog3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="textCont">
          <h1 className="mainTitle">The Mental Health Benefits of Exercise</h1>

          <img
            className="firstImg"
            src="https://healthtalk.unchealthcare.org/wp-content/uploads/2020/06/GettyImages-1227598261-healthtalk-860x478.jpg"
            alt="Advice"
          />
          <p className="paragraphs">
            You already know that exercise is good for your body. But did you know it can also boost your mood, improve
            your sleep, and help you deal with depression, anxiety, stress, and more?{" "}
          </p>

          <h4 className="subTitles">What are the mental health benefits of exercise?</h4>
          <p className="paragraphs">
            Exercise is not just about aerobic capacity and muscle size. Sure, exercise can improve your physical health
            and your physique, trim your waistline, improve your sex life, and even add years to your life. But that’s
            not what motivates most people to stay active. People who exercise regularly tend to do so because it gives
            them an enormous sense of well-being. They feel more energetic throughout the day, sleep better at night,
            have sharper memories, and feel more relaxed and positive about themselves and their lives. And it’s also a
            powerful medicine for many common mental health challenges. Regular exercise can have a profoundly positive
            impact on depression, anxiety, and ADHD. It also relieves stress, improves memory, helps you sleep better,
            and boosts your overall mood. And you don’t have to be a fitness fanatic to reap the benefits. Research
            indicates that modest amounts of exercise can make a real difference. No matter your age or fitness level,
            you can learn to use exercise as a powerful tool to deal with mental health problems, improve your energy
            and outlook, and get more out of life.
          </p>
          <h4 className="subTitles">It might make you age slower.</h4>
          <p className="paragraphs">
            Exercise has been shown to lengthen lifespan by as much as five years. A small new study suggests that
            moderate-intensity exercise may slow down the aging of cells. As humans get older and their cells divide
            over and over again, their telomeres—the protective caps on the end of chromosomes—get shorter. To see how
            exercise affects telomeres, researchers took a muscle biopsy and blood samples from 10 healthy people before
            and after a 45-minute ride on a stationary bicycle. They found that exercise increased levels of a molecule
            that protects telomeres, ultimately slowing how quickly they shorten over time. Exercise, then, appears to
            slow aging at the cellular level.
          </p>

          <img
            className="secondImg"
            src="https://www.sponser.ch/cms/fileadmin/_processed_/2/2/csm_Energy_Endurance_94c7245bf5.jpg"
          />
          <h4 className="subTitles">Exercise and stress</h4>
          <p className="paragraphs">
            Ever noticed how your body feels when you’re under stress? Your muscles may be tense, especially in your
            face, neck, and shoulders, leaving you with back or neck pain, or painful headaches. You may feel a
            tightness in your chest, a pounding pulse, or muscle cramps. You may also experience problems such as
            insomnia, heartburn, stomachache, diarrhea, or frequent urination. The worry and discomfort of all these
            physical symptoms can in turn lead to even more stress, creating a vicious cycle between your mind and body.
            Exercising is an effective way to break this cycle. As well as releasing endorphins in the brain, physical
            activity helps to relax the muscles and relieve tension in the body. Since the body and mind are so closely
            linked, when your body feels better so, too, will your mind.
          </p>
          <br></br>
          <br></br>
          <h4 className="subTitles">Exercise and anxiety</h4>
          <p className="paragraphs">
            Exercise is a natural and effective anti-anxiety treatment. It relieves tension and stress, boosts physical
            and mental energy, and enhances well-being through the release of endorphins. Anything that gets you moving
            can help, but you’ll get a bigger benefit if you pay attention instead of zoning out. Try to notice the
            sensation of your feet hitting the ground, for example, or the rhythm of your breathing, or the feeling of
            the wind on your skin. By adding this mindfulness element—really focusing on your body and how it feels as
            you exercise—you’ll not only improve your physical condition faster, but you may also be able to interrupt
            the flow of constant worries running through your head.
          </p>
        </div>
        <Container className="newContainer" fluid>
          <p className="alsoRead">You Can Also Read ..</p>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <CardBlog1 />
            </Col>
            <Col xs lg="4">
              <CardBlog2 />
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

export default Blog3;
