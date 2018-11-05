import React from 'react';
import styled from 'styled-components';
import StarRating from './starRating';

const StyledWrapper = styled.li`
  border-bottom: 1px solid #e1e3df;
  padding-bottom: 1.29rem;
  margin-bottom: 1.29rem;
  padding-inline-start: 0px;
  overflow: auto;
`

const Author = styled.div`
  display: flex;
  flex-direction: column;
  float:left;
  vertical-align: top;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-right: 0.86rem;
  padding-bottom: 1.29rem;
  width: 25%;
`

const ProfilePic = styled.img`
  border-radius: 50%;
  display: block;
  width: 3rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 0.5rem;
`

const ReviewedBy = styled.div`

`

const Details = styled.div`
  display: block;
  float: left;
  width: 72%;
`

const Comment = styled.div`
  margin-bottom: 0.86rem;
`

const Rating = styled.div`
  display: inline-block;
  vertical-align: center;
  padding-bottom: .5rem;
  padding-top: 0.2rem;
`

const Date = styled.span`
  float: right;
`

const Item = styled.div`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`

const ItemPhoto = styled.img`
  width: 2.5rem;
  height: auto;
  padding-right: 0.86rem;
`

const ItemName = styled.div`
  display: inline-block;
  font-size: 0.87rem;
`
const Link = styled.a`
  :not(:hover) {
    text-decoration-line: none;
  }
  :visited {
    color: black;
  }
`

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledWrapper>
        <Author>
          <ProfilePic src={this.props.review.profile_pic_path} />
          <ReviewedBy>Reviewed by: <br></br><Link href='/'>{this.props.review.username}</Link></ReviewedBy>
        </Author>
        <Details>
          <div id='review_header'>
            <Rating><StarRating rating={this.props.review.rating}/></Rating>
            {this.props.review.date && 
            <Date>{this.props.review.date.slice(0,10)}</Date>
            }
          </div>
          <Comment>{this.props.review.comment}</Comment>
          <Item>
            <ItemPhoto src={this.props.review.image_path}/>
            <ItemName><Link href='/'>Boots</Link></ItemName>
          </Item>
        </Details>
      </StyledWrapper>
    )
  }
}

export default Review;