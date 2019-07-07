import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDatasets } from '../../ducks/Datasets';

import { Wrapper } from '../style';

import './Datasets.css'

class Datasets extends Component {
   componentDidMount() {
      this.props.fetchDatasets();
   }

   render() {
      return (
         <section className="datasets-page">
            <Wrapper>
               <div>
                  <Link className="btn-link transition add-dataset" to="/datasets/create">Добавить пост</Link>
               </div>

               <h1>Data</h1>
            </Wrapper>
         </section>
      )
   }
}

const mapStateToProps = (props) => ({
   datasets: props.datasetsReducer.datasets,
   loadingOfData: props.datasetsReducer.loadingOfData,
   errorMessage: props.datasetsReducer.errorMessage
})

const mapDispatchToProps = {
   fetchDatasets,
   // createDatsets
};

export default connect(mapStateToProps, mapDispatchToProps)(Datasets);