import StarRatings from 'react-star-ratings';
import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="black"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
        starDimension='1.2rem'
        starSpacing='.02rem'
      />
    );
  }
}

export default StarRating

