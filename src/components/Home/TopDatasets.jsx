import React, { Fragment } from 'react';
import { Wrapper } from '../style'

import TextTitle from '../UI/text-title/text-title';

import './Home.css'

const DatasetBox = () => {
   return (
      <div className="dataset-box flex j-sb flex-wrap">
         <div className="dataset-box__item">
            <div className="dataset-box__img">
               <img src="https://storage.googleapis.com/kaggle-datasets-images/62920/121792/0b2d5fa44f4288eb760b7d83f9f1dfd2/dataset-cover.jpg?t=2018-10-10-16-28-48" alt="dataset"/>
            </div>
            <div className="dataset-box__text">
               <div className="dataset-box__desc">
                  <p className="dataset-box__title">Financial Tweets</p>
                  <p className="dataset-box__author">David Wallach</p>
               </div>
               <p className="dataset-box__type">CSV Dataset | 50 upvotes</p>
            </div>
         </div>
         <div className="dataset-box__item">
            <div className="dataset-box__img">
               <img src="https://storage.googleapis.com/kaggle-datasets-images/36341/54972/e92d46e8c6754c16c2dc19df1f08dd9d/dataset-cover.png?t=2018-07-12-09-44-49" alt="dataset"/>
            </div>
            <div className="dataset-box__text">
               <div className="dataset-box__desc">
                  <p className="dataset-box__title">Face detection in Images</p>
                  <p className="dataset-box__author">DataTurks</p>
               </div>
               <p className="dataset-box__type">JSON Dataset | 68 upvotes</p>
            </div>
         </div>
         <div className="dataset-box__item">
            <div className="dataset-box__img">
               <img src="https://storage.googleapis.com/kaggle-datasets-images/59981/116390/33f700110d8d2e206c59265084efea42/dataset-cover.jpg?t=2018-10-06-10-03-38" alt="dataset"/>
            </div>
            <div className="dataset-box__text">
               <div className="dataset-box__desc">
                  <p className="dataset-box__title">Star Trek Scripts</p>
                  <p className="dataset-box__author">Gary Broughton</p>
               </div>
               <p className="dataset-box__type">JSON Dataset | 12 upvotes</p>
            </div>
         </div>
         <div className="dataset-box__item">
            <div className="dataset-box__img">
               <img src="https://storage.googleapis.com/kaggle-datasets-images/30292/38613/ab6171de10588e40148aed91ff39e2e9/dataset-cover.jpg?t=2018-06-06-13-58-40" alt="dataset"/>
            </div>
            <div className="dataset-box__text">
               <div className="dataset-box__desc">
                  <p className="dataset-box__title">Avocado Prices</p>
                  <p className="dataset-box__author">Justing Kiggins</p>
               </div>
               <p className="dataset-box__type">CSV Dataset | 546 upvotes</p>
            </div>
         </div>
      </div>
   )
}

const TopDatasets = () => {
   return (
      <section className="top-datasets">
         <Wrapper>
            <h2>
               Inside Kaggle you’ll find all the 
               code & data you need to do your data 
               science work. Use over 16,000 public 
               datasets and 200,000 public notebooks 
               to conquer any analysis in no time.
            </h2>

            <TextTitle>Top Datasets</TextTitle>
            
            <DatasetBox />
         </Wrapper>
      </section>
   )
}

export default TopDatasets;