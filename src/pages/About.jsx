import Card from "../components/shared/Card";
import {Link} from 'react-router-dom'


function About() {
  return (
    <Card>
      About
      <br></br>
      <Link to="/">The Crib</Link>
    </Card>
  );
}

export default About;
