var axios = require('axios');
import { shallow, mount, render } from 'enzyme';
import {Reviews, MoreLink, AllReviewsButton, ReviewDiv} from '../client/src/reviews';
import React from 'react';
import Review from './../client/src/components/review';
import StarRating from './../client/src/components/starRating';
import Carousel from './../client/src/components/carousel'
import fakeReviews from './fakeReviews.json';
import 'jest-styled-components';

describe('Front End', function() {
  test('should render a review component', () => {
    const wrapper = mount(<Reviews />)

    expect(wrapper.find(Review).length).toBe(1);

    wrapper.setState({
      reviews: fakeReviews.reviews,
      averageRating: fakeReviews.averageRating,
      reviewImages: fakeReviews.imagePaths,
      reviewCount: fakeReviews.reviewCount
    });
  
    expect(wrapper.find(Review).length).toBe(10);
    expect(wrapper.find(StarRating).length).toBe(11);
    expect(wrapper.find(Carousel).length).toBe(1);
    expect(wrapper.find(MoreLink).length).toBe(1);
    expect(wrapper.find(AllReviewsButton).length).toBe(1);

    expect(wrapper.state('showMore')).toBe(false);

    console.log(wrapper);
    expect(wrapper.find(AllReviewsButton)).toHaveStyleRule('display', 'none');
    // expect(wrapper.find(ReviewDiv).get(5)).toHaveStyleRule('display', 'none');
    wrapper.find(MoreLink).simulate('click');
    expect(wrapper.state('showMore')).toBe(true);
    expect(wrapper.find(AllReviewsButton)).toHaveStyleRule('display', 'block');
  })
});



describe('Reviews API', function() {
  test('should return reviews data', function() {
    return axios.get('http://localhost:3456/reviews', {
      params: {
        id: 1
      }
    })
    .then((response) => {
      expect(fakeReviews.reviews).toBeTruthy();
      expect(fakeReviews.reviews.length).toEqual(10);
      let review = fakeReviews.reviews[0];
      expect(review.username).toBeTruthy();
      expect(review.profile_pic_path).toBeTruthy();
      expect(review.date).toBeTruthy();
      expect(review.rating).toBeTruthy();
      expect(review.item_id).toBeTruthy();
      expect(review.comment).toBeTruthy();
      expect(review.image_path).toBeTruthy();
      expect(review.name).toBeTruthy();
      expect(review.id).toBeTruthy();

      expect(fakeReviews.averageRating).toBeTruthy();
      let averageRatingType = typeof fakeReviews.averageRating;
      expect(averageRatingType).toMatch(/number/);

      expect(fakeReviews.imagePaths).toBeTruthy();

    })
    .catch((err) => console.log(err))
  })
})