import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';
import FadeInSection from '../components/fadeinsection';
import Gallery from 'react-photo-gallery';
import React, {useEffect} from 'react';
React.useLayoutEffect = React.useEffect;

export default function About({photos}) {
  const photos1 = ['IMG_4087.jpg', 'IMG_4089.jpg', 'IMG_4090.jpg', 'IMG_4091.jpg', 'IMG_4889.jpg', 'img1.jpg', 'img7.jpg', 'img8.jpg', 'img12.jpg'];
  const photos2 = ['IMG_4094.jpg', 'IMG_4801.jpg', 'IMG_4803.jpg', 'IMG_5863.jpg', 'IMG_5867.jpg', 'img2.jpg', 'IMG_4888.jpg', 'img10.jpg', 'meeting.jpg'];
  const photos3 = ['IMG_4885.jpg', 'IMG_4886.jpg', 'IMG_4887.jpg', 'img3.jpg', 'img6.jpg', 'img9.jpg', 'outreach1.jpg', 'img20.jpg'];
  const photos4 = ['IMG_4804.jpg', 'IMG_4881.jpg', 'IMG_4883.jpg', 'IMG_4884.jpg', 'IMG_6818.jpg', 'img5.jpg', 'img4.jpg', 'img11.jpg', 'outreach2.jpg'];

  return (
    <>
      <Header title="About" page="About" description="Meet the Team!" />
      
      <div className="About">
        <div className="typewriter" style={{textAlign: 'center', fontFamily: 'Mali', fontSize: 30, flexDirection: 'row', paddingTop: 20, paddingBottom: 20}}>Our mission is to promote STEM and FIRST within our community to help establish the next generation of innovators!</div>

        <FadeInSection><div className="section">
          <Title name="Coaches" />
          <div className="person-grid grid">
           <div className="grid-item">
              <img src={require(`/public/images/coaches/liangshou.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Liangshou</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Liangshou Wu, and I work for Google. I have been a mentor/coach for FLL and FTC for 4 years. I enjoy working with students in various FIRST programs. Specifically in FTC 18225, I have been focusing on coaching programming and mentoring other FTC teams.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/coaches/lynne.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Lynne</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Lynne Dong, and I work for Microsoft. I have been coaching and mentoring FLL and FTC teams for the past 9 years. It's my pleasure to work with so many talented students in FIRST by teaching them technical/business skills and connecting them with professionals in the tech industry.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/coaches/mark.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Mark</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Mark Ma, and I work for the King County DJA. I have been an FTC mentor/coach for 3 years. Supporting STEM is one of my biggest passions, and in FIRST, I focus on coaching the mechanical/CAD team. I strive to push students to think creatively while learning important skills such as problem analysis and resolution.</p>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Mentors" />
          <div className="person-grid grid">
            <div className="grid-item">
              <img src={require(`/public/images/mentors/jacky.jpg`).default.src} height="300px" className="member" />
              <h3>Jacky Pai</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/mihir.jpg`).default.src} height="300px" className="member" />
              <h3>Mihir Jain</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/xiaoxi.jpg`).default.src} height="300px" className="member" />
              <h3>Xiaoxi Wang</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/yinhai.jpg`).default.src} height="300px" className="member" />
              <h3>Yinhai Wang</h3>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="The Team" />
          <div className="person-grid grid">
            <div className="grid-item">
              <img src={require(`/public/images/teammembers/albert.jpg`).default.src} height="300px" className="member" />
              <h3>Albert Lu</h3>
              <p className="description">CAD / Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Albert, a 7th grader at Tyee Middle School. This is my 3rd year in FIRST (2nd in FLL, 1st in FTC). I like to read, play the clarinet, and programming in my free time. I also have a science YouTube channel which I update weekly.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/allen.jpg`).default.src} height="300px" className="member" />
              <h3>Allen Wu</h3>
              <p className="description">Programming Lead</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Allen, a freshman at Newport High School. This is my 2nd year of FTC, following 2 years of FLL. Outside of robotics, I'm extremely passionate about competitive programming and piano. I also enjoy playing basketball, tennis, volleyball, and hang out with friends!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/andrew.jpg`).default.src} height="300px" className="member" />
              <h3>Andrew Pai</h3>
              <p className="description">Safety Captain</p>
              <p className="description">Drive / Mechanical</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Andrew, a 9th grader at Newport High School. This is my 1st year in both FTC and FRC. In my free time, I play various sports like tennis or basketball, hang out with friends, read books from the Mistborn series and the Grishaverse, play video games, and binge anime.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/andy.jpg`).default.src} height="300px" className="member" />
              <h3>Andy Tien</h3>
              <p className="description">CAD Co-Lead</p>
              <p className="description">Programming</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Andy, a freshman at Newport High School. This is my 1st year of FTC, following 2 years of FLL. When I'm not dabbling in competitive and robotics mechanical engineering and programming, I enjoy playing soccer and violin.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/eesha.jpg`).default.src} height="300px" className="member" />
              <h3>Eesha Jain</h3>
              <p className="description">CAD Co-Lead</p>
              <p className="description">Web Developer / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Eesha, a 9th grader at Interlake High School. This is my 5th year in FIRST (2 in FLL and 3 in FTC). In my free time, I enjoy web and app development, writing, listening to music, and hanging out with my friends.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/emma.jpg`).default.src} height="300px" className="member" />
              <h3>Emma Shi</h3>
              <p className="description">Co-Captain</p>
              <p className="description">Business / Outreach / Engineering Notebook</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Emma, a senior at Tesla STEM High School! This is my 9th year in FIRST (6th year in FTC), and enjoyed learning the disciplines of FIRST. As co-captain, I lead business and outreach aspects of our team, including mentoring our younger team members. Outside of robotics, I like to read, bake, listen to musicals, ski, and play games!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/erik.jpg`).default.src} height="300px" className="member" />
              <h3>Erik Ma</h3>
              <p className="description">Co-Captain</p>
              <p className="description">CAD / Mechanical / Programming / Drive</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Erik, a senior at Interlake High School. This is my 3rd year within FIRST (FTC/FRC), and I have a big passion for engineering. As co-captain, I manage the overall architectural design of our robot (mechanical, programming, and CAD), lead the drive team, and mentor students in robotics. In my free time, I love spending time with friends, hosting events, and playing ultimate frisbee!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/eugene.jpg`).default.src} height="300px" className="member" />
              <h3>Eugene Li</h3>
              <p className="description">Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Eugene, a freshman at Newport High School. This is my 2nd year of FTC following 1 year of FLL. Some fun facts about me are I have a passion for music, my favorite series is the Lord of the Rings trilogy, vanilla is my favorite icecream flavor, and I hate the sound of Velcro.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/julia.jpg`).default.src} height="300px" className="member" />
              <h3>Julia Wang</h3>
              <p className="description">Public Relations Lead</p>
              <p className="description">Business / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Julia, a sophomore at The Bush School. This is my 2nd year of FTC following 1 year of FLL. Some of my favorite things include golf, Pixar, astrology, Valorant, strawberry icecream, and the Land of Stories book series.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/katrina.jpg`).default.src} height="300px" className="member" />
              <h3>Katrina Li</h3>
              <p className="description">Business / Outreach</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Katrina, a senior at Newport High School. This is my 2nd year as a member of High Definition focusing on business and outreach. I am really interested in how engineering can be used to solve current challenges in ethical ways. In my free time I enjoy baking, hiking, and watching documentaries.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/lucas.jpg`).default.src} height="300px" className="member" />
              <h3>Lucas Wu</h3>
              <p className="description">Engineering Notebook Lead</p>
              <p className="description">Business / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Lucas, a senior at Interlake High School. This is my 3rd year in FTC, focusing mainly on documentation and hardware aspects of the robot. Outside of FIRST and robotics, I spend time studying math and chemistry, and enjoy reading novels and playing the piano in my free time.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/rishabh.jpg`).default.src} height="300px" className="member" />
              <h3>Rishabh Venkatesan</h3>
              <p className="description">Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Rishabh, a senior at Tesla STEM High School. This is my 5th in both FTC and FRC. As a programmer, I have learned many techniques and solutions to common issues over my journey in FIRST! In my free time, I sketch cars, learn about new technologies, and play basketball for fun.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/rohit.jpg`).default.src} height="300px" className="member" />
              <h3>Rohit Venkatesan</h3>
              <p className="description">CAD / Mechanical</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Rohit, an 8th grader at Evergreen Middle School. This is my 1st year of FTC following 1 year of FLL and 2 years of VEX (IQ). My current hobbies include reading, playing board games, and playing the piano and several percussion instruments.</p>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Photo Gallery" />
          <Gallery photos={photos} />

          {/*<div className="photogallery">
            <div className="picrow"> { photos1.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos2.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos3.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos4.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
          </div>*/}
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const url = process.env.NODE_ENV === "production" ? "https://ftc18225.everstem.org/" : "http://localhost:3000";
  const req = await fetch(`${url}/api/gallery`);
  const res = await req.json();
  return {
    props: {
      photos: res.str
    }
  }
}