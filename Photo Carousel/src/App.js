import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PhotoCarousel from "./components/PhotoCarousel.js";
import Description from "./components/Description.js";
import Reviews from "./src2/reviews"


library.add(faAngleLeft);
library.add(faAngleRight);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <PhotoCarousel />
        </div>
				<br/>
        <div>
          <Description />
        </div>
				<div style={{width: "570px"}}>
					<Reviews />
				</div>
      </div>
    );
  }
}

