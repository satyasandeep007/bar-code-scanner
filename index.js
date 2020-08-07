import React, { Component } from 'react';

import SinglePage from "./SinglePage";
import MultiPage from "./MultiPage";
import PrintButton from "./PrintButton";

const App = () => (<div className="bg-black-80 w-100 pv5">
  <div className="white mt3 tc f3">Single Page Mode</div>
  <PrintButton id={"singlePage"} label={"Print single page"} />
  <SinglePage id={"singlePage"}/>

  <div className="white mt5 tc f3">Multi Page Mode</div>
  <PrintButton id={"multiPage"} label={"Print multiplate pages"} />
  <MultiPage id={"multiPage"} />
</div>);

export default App;

// render(<App />, document.getElementById('root'));
