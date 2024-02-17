import reactImg from '../assets/react-core-concepts.png';
import './Header.css'

const reactDescrition = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const randomDescription = reactDescrition[getRandomInt(reactDescrition.length)];
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {randomDescription} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }