---
layout: post
description: 
categories: [pbl]
permalink: /pbl/planningboard
---

<style>
 

.wrapper {
  padding: 30px;
}

.box {
  border: 25px solid grey;
  width: 78%;
  background: #e8ca95;
  -webkit-box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);
  -moz-box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);
  box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);

   
}

.an-wrap {
  background: #8a3333;
  padding: 18px;
  color: white;
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
}

.em-wrap {
  padding: 18px;
  background: bisque;
  font-size: 12px;
  -o-transform: rotate(3deg);
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
}

.memo-wrap {
  padding: 18px;
  background: aliceblue;
  font-size: 12px;
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
}

.title-an {
  padding-bottom: 1px;
}

.date-an {
  font-size: 11px;
  padding-bottom: 5px;
}

.cont-an {
  font-size: 12px;
}

 

.news-wrap {
  font-size: 12px;
  background: #ffff;
  padding: 23px;
}

.new-img {
  width: 84px;
  float: left;
  height: auto;
  margin-right: 11px;
}

.news-title {
  font-size: 18px;
  padding-bottom: 7px;
}

.news-sub-title {
  font-size: 11px;
  font-style: italic;
}

.marker-icon {
  width: 16px;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 26px;
}

.title-em {
  font-size: 18px;
}

.from-em {
  margin-top: 3px;
}

.date-em {
  margin-bottom: 3px;
}

.an-img {
  width: 100%;
  margin-right: 4px;
  height: auto;
}

.an-wrap:hover,
.news-wrap:hover,
.memo-wrap:hover,
.em-wrap:hover {
  -webkit-box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);
  -moz-box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);
  box-shadow: 10px 10px 5px -4px rgba(176, 176, 176, 1);

  cursor: pointer;

  transform: scale(1.1);
  -webkit-transition: transform 0.2s ease-in-out;
  -moz-transition: transform 0.2s ease-in-out;
  -ms-transition: transform 0.2s ease-in-out;
}

.an-wrap:before {
  content: "";
  position: absolute;
  top: 0;
  right: -1px;
  border-width: 0 16px 16px 0;
  border-style: solid;
  border-color: #fcf5e7 #e8ca95 #ffffff #e8ca95;
  background: #e8ca95;
  display: block;
  width: 0;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
    -1px 1px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 768px) {
  .box {
    width: 100%;
  }



</style>

<html>
<div class="wrapper">
  <div class="container-fluid box px-md-3 py-3">
    <div class="row">
      <div class="col-md-3 ">
        <div class="row">
          <div class="col-md-12">
            <div class="an-wrap" id="a1">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-an">Announcement Title</div>
              <div class="date-an">23-08-2019</div>
              <div class="cont-an"><img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" class="an-img">In the first paragraph, want to deliver your most critical information upfront, and then use subsequent paragraphs as opportunities to dive into more
                detail</div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="memo-wrap" id="m1">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-em">Memo1</div>
              <div class="from-em">From :xxxxy@gmail.com</div>
              <div class="date-em">Date : 23-08-2019</div>
              <div class="cont-em">In the first paragraph, you'll want to quickly and clearly state the purpose of your memo. You might begin your sentence with the phrase, A memo is </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 ">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="news-wrap" id="n1">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="news-title">Title1</div>
              <p class="news-sub-title">Sub Title1</p><img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" class="new-img"> In the first paragraph, you'll want to quickly and clearly state the purpose of your memo. You might begin your sentence with the phrase,
              . A memo is meant
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="em-wrap" id="e1">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-em">Leave Approval</div>
              <div class="from-em">From : deepak@gmail.com</div>
              <div class="date-em">Date : 23-08-2019</div>
              <div class="cont-em">In the first paragraph, you'll want to quickly and clearly state the purpose of your memo more detail. new</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="memo-wrap" id="m2">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-em">Memo1</div>
              <div class="from-em">From : deepak@gmail.com</div>
              <div class="date-em">Date : 23-08-2019</div>
              <div class="cont-em">In the first paragraph, you'll want to quickly and clearly state the purpose of your memo. You might begin your sentence with the phrase, A memo is </div>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="news-wrap" id="n2">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="news-title">Title1</div>
              <p class="news-sub-title">Sub Title1</p><img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" class="new-img"> In the first paragraph, you'll want to quickly and clearly state the purpose of your memo. You might begin your sentence with the phrase,
              . A memo is meant
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="an-wrap" id="a2">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-an">Announcement Title</div>
              <div class="date-an">23-08-2019</div>
              <div class="cont-an"><img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" class="an-img">In the first paragraph, want to deliver your most critical information upfront, and then use subsequent paragraphs as opportunities to dive into more
                detail</div>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="em-wrap" id="e2">
              <img src="https://image.flaticon.com/icons/svg/230/230336.svg" class="marker-icon">
              <div class="title-em">Leave Approval</div>
              <div class="from-em">From : deepak@gmail.com</div>
              <div class="date-em">Date : 23-08-2019</div>
              <div class="cont-em">In the first paragraph, you'll want to quickly and clearly state the purpose of your memo more detail. new</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</script>