import React, { Fragment } from 'react';
import { Wrapper } from '../style'

import TextTitle from '../UI/text-title/text-title';

import './Home.css'

const CompetitionsBox = () => {
   return (
      <div className="competitions-box flex j-sb flex-wrap">
         <a className="competitions-box__link competitions-box__item" href="/">
            <div className="competitions-box__text">
               <p className="competitions-box__title">Machine Learning</p>
               <p className="competitions-box__desc">Machine Learning is the hottest field in data science, and this track will get you started quickly</p>
            </div>
            <div className="competitions-box__members">
               <div className="competitions-box__members__box">
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
               </div>
               <p className="competitions-box__members__more">+60</p>
            </div>
         </a>

         <a className="competitions-box__link competitions-box__item" href="/">
            <div className="competitions-box__text">
               <p className="competitions-box__title">Machine Learning</p>
               <p className="competitions-box__desc">Machine Learning is the hottest field in data science, and this track will get you started quickly</p>
            </div>
            <div className="competitions-box__members">
               <div className="competitions-box__members__box">
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
               </div>
               <p className="competitions-box__members__more">+60</p>
            </div>
         </a>

         <a className="competitions-box__link competitions-box__item" href="/">
            <div className="competitions-box__text">
               <p className="competitions-box__title">Machine Learning</p>
               <p className="competitions-box__desc">Machine Learning is the hottest field in data science, and this track will get you started quickly</p>
            </div>
            <div className="competitions-box__members">
               <div className="competitions-box__members__box">
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
               </div>
               <p className="competitions-box__members__more">+60</p>
            </div>
         </a>

         <a className="competitions-box__link competitions-box__item" href="/">
            <div className="competitions-box__text">
               <p className="competitions-box__title">Machine Learning</p>
               <p className="competitions-box__desc">Machine Learning is the hottest field in data science, and this track will get you started quickly</p>
            </div>
            <div className="competitions-box__members">
               <div className="competitions-box__members__box">
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
                  <div className="competitions-box__members__img">
                     <img src="https://storage.googleapis.com/kaggle-avatars/images/2997534-gr.jpg" alt=""/>
                  </div>
               </div>
               <p className="competitions-box__members__more">+60</p>
            </div>
         </a>
      </div>
   )
}

const TopCompetitions = () => {
   return (
      <section className="top-competitions">
         <Wrapper>
            <TextTitle>Top Competitions</TextTitle>
            <CompetitionsBox />
         </Wrapper>
      </section>
   )
}

export default TopCompetitions;