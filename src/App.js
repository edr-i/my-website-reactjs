import logo from './logo.svg';
import './App.css';
import background from './photos/background.jpg';
import edri from './photos/edri.jpg';
import travel from './photos/travel.jpg';
import hiking from './photos/hiking.jpg';
import photography from './photos/photography.jpg';

function App() {
  return (
    <div className="App">
      <h1>Edri Kopliku</h1>
      <div id="about">
        <div id="about-text">
          <h2>About</h2>
          <p>Hello there! As you could probably tell by now, I'm Edri. I'm 17 and in my final year of a vocational high school for Informatics in the small city Shkodra, Albania. I do a bit of pretty much everything, and this site aims to give you a glimpse of who I am. IT (at the time I referred to them as *computers*) has been my thing since forever. Because of how interested in this field I have always been, I decided to choose it as my career path. I am currently specializing in System Technology and I aspire to become a Software Engineer. As a proud opportunist that I am, I have participated in many activities and competitions, some of which mentioned below (I only mentioned the ones where I won, to look good). In addition to that, I am part of US Embassy Youth Council and Code for Albania. I am currently doing a summer internship at Deloitte Digital, where I'm deepening my knowledge of overall front-end development. </p>
        </div>
        <img src={edri} id="about-photo" />
      </div>

      <h2>Hobbies</h2>
      <div id="hobbies">
        <div>
          <strong>Travelling</strong><br />Travelling around Europe is a thing I love to do. Since I was a little kid, I would travel to different places around Albania. Although COVID kind of gave this tradition a little hit, I still travel to different places all throughout the year. To see all the places I have been to, click <a href="https://www.tripadvisor.com/TravelMap-a_uid.37A05DC826C66A1548B8E72A68964AC0">here</a>.
          <img src={travel} id="travel" />
        </div>
        <div>
          <strong>Hiking</strong><br />I love going on long hikes around the mountains of Albania. This is also a good opportunity to combine it with the next hobby of mine, photography!
          <img src={hiking} id="travel" />
        </div>
        <div>
          <strong>Photography</strong><br />Photography has been a passion of mine since I was a little kid. The idea of capturing memories and then going back to them has always been fascinating to me. I see it as an opportunity of expressing myself with a little special touch. On the technical side of things, I went from using my mom's phone to messing with the DSLR settings until I figured them out. Below is some of my photography work! All pictures were taken during my travel on a Canon Powershot G15 with manual settings, and then edited with Adobe Lightroom.
          <img src={photography} id="travel" />
        </div>
      </div>

    </div>
  );
}

export default App;
