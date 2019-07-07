import React from 'react';
import { connect } from 'react-redux';

import { createDatsets } from '../ducks/Datasets';

import DatasetsCreate from '../components/Datasets/DatasetsCreate';

const DatasetsCreatePage = ({ 
   loadingOfData, createDatsets, createdDataset 
}) => {
   return (
      <DatasetsCreate 
         loadingOfData={loadingOfData}
         createdDataset={createdDataset}
         createDatsets={createDatsets} 
      />
   )
}

const mapStateToProps = (props) => ({
   loadingOfData: props.datasetsReducer.loadingOfData,
   createdDataset: props.datasetsReducer.createdDataset
});

const mapDispatchToProps = {
   createDatsets
};

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsCreatePage);