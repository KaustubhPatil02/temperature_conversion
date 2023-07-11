import "./App.scss"


function App() {

  return (
    <>
      <div className="container">
        <h1>Temperature Conversion</h1> 
        <label htmlFor="temperature">Enter the units for conversion</label>
        <input type="numbers" id="temprature" name="temperature" placeholder="enter values: 25C or 99F" />
        <select name="unit" id="unit">
          <option value="Celcius">Celcius</option>
          <option value="Farenheit">Farenheit</option>
          <option value="Kevin">Kevin</option>
        </select>
        {/* <br />
        <br />
        <br /> */}
        <span>TO</span>
        <select name="to_unit" id="to_unit">
          <option value="Farenheit">Farenheit</option>
          <option value="Celcius">Celcius</option>
          <option value="Kevin">Kevin</option>
        </select>
        <button id="btn">Convert the units</button>
        <div className="container-result">
          <h2>The Conversion is:</h2>
          <p id="result"></p>
        </div>
        <script src="./convert.js"></script>
      </div>

    </>
  )
}

export default App
