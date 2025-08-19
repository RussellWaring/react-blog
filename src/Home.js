const Home = () => {

  /* Function for button, added it as the FIRST parameter - the event object e */
  const handleClick = (e) => {
    console.log('Hello, yokel', e);
  }

  /* how we REACT to click events, in components */
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }


/*   dynamic value, anonymous function, event object/parameter -> permitted inside functions where an event occurs  */
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Luigi', e)}>Click me again</button>
    </div>
  );
}
 
export default Home;