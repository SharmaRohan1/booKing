import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


import "./styles/joinusStyles.css"

function JoinUs() {
  return (
    <section id="joinus-section">
    <div className="joinus-container">
    <h2>Wanna join us?</h2>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Start a chapter (Student Leader Registration)</Accordion.Header>
        <Accordion.Body>
        <p>At BooKing, we invite you to be a part of a movement that goes beyond books. Help us expand BooKing by leading a chapter at your college. Fill out the form given below and show us what you’ve got. </p>
        <form action="" className="studentLeaderForm">
            <input type="text" placeholder='Name'  required/>
            <input type="text" placeholder='College'  required/>
            <input type="email" placeholder='E-Mail'  required/>
            <Button as="input" type="submit" value="Submit" variant='success'/>{' '}
        </form>
            
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Work with us (Team member Registration)</Accordion.Header>
        <Accordion.Body>
        Want to join our core team? If you are enthusiastic about the cause as much as we are, please fill out the form below and we’ll contact you soon. If you have a unique pitch about how you see yourself contributing to our organization for a position which is not mentioned below, don't hesitate to reach out to us at <a href="mailto:booking.rrr101@gmail.com">booking.rrr101@gmail.com</a> . 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Join the Community</Accordion.Header>
        <Accordion.Body>
        Join our community to get the latest updates on everything that’s coming your way. To be a part of our WhatsApp community, click on the link given below.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
        
    </section>
  );
}

export default JoinUs;