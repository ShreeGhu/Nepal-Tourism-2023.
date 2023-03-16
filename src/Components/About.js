import aboutImg from "../images/about.jpg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            1310 Peaks is a division of Nepal Tourism 2023 ; a travel agency in
            Kathmandu, Nepal. The head office of this travel agency is located
            at Thamel. As a travel agent, we accept online booking of domestic
            and international flight / air ticketing. We have been providing our
            services for individual and group as well. Our mission is to provide
            quality and excellence services to our customers with promptly and
            exclusively. Company / Agency registration and approval: Smile
            Adventure and Tours Pvt. Limited is recognized by Ministry of
            tourism, government of Nepal as a travel agency.
          </p>

          <p>
            We are affiliated with national and international association of
            travel and tourism industries and bodies Our Services: Flight
            ticketing: Flight ticketing is our a major service. We are sales
            agents for different airlines so we offer domestic and international
            flight and air ticketing. Amadeus, Galileo and Abacus are the main
            online booking booking system which we use for air ticketing.
            Adventure and tour: We offer culture & nature tour, Jungle Safari
            tour package, Trekking & hiking more activities in Nepal, Bhutan and
            Tibet. We provide our service from your arrival in Kathmandu to
            until your departure from Nepal.
          </p>

          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
