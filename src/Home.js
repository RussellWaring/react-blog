import { useState } from 'react';

const Home = () => {

  /* Variable not REACTIVE */
  // let name = 'Luigi';

  const [name, setName] = useState('Luigi');

  const [age, setAge] = useState(25);

  const handleClick = () => {

    setName('Mario');
    setAge(30);
  }


  /* To update message dynamically, we use a hook. Hook is called useState */
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;