import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Apple</h1>
      </div>
      <div className="navbar">
        <a href="#">Macbook</a>
        <a href="#">Ipad</a>
        <a href="#">Iphone</a>
        <a href="#">Airpods</a>
        <a href="#">Accessories</a>
      </div>
      <div className="main">
        <div className="row">
          <div className="column col1">
            <h2>Iphone 14</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              modi?
            </p>
            <button className="btn">Compare</button>
          </div>
          <div className="column col2">
            <h2>Airpods</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              officiis.
            </p>
            <button className="btn">Pricing</button>
          </div>
        </div>
      </div>
      <div className="main2">
        <div className="row2">
          <div className="column2">
            <h2>Macbook Pro</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              id facilis quas deleniti repudiandae blanditiis ipsam reiciendis
              illum sit molestias quae ducimus exercitationem, itaque tenetur.
            </p>
            <button className="btn">Models</button>
          </div>
        </div>
      </div>
      <div className="main3">
        <div className="row3">
          <div className="column3">
            <a href="#">iPhone</a>
            <a href="#">iPhone 14</a>
            <a href="#">iPhone 14 Pro</a>
          </div>
          <div className="column3">
            <a href="#">Airpods Classic</a>
            <a href="#">Airpods 1.0</a>
            <a href="#">Airpods</a>
          </div>
          <div className="column3 col3">
            <a href="#">iMac</a>
            <a href="#">Macbook </a>
            <a href="#">Macbook Air</a>
          </div>
          <div className="column3 col4">
            <a href="#">Contact us</a>
            <a href="#">Register</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Copyright</h2>
      </div>
    </div>
  );
}
