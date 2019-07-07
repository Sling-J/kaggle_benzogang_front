import React, { Fragment } from 'react';
import { Wrapper } from '../style'

import TopDatasets from './TopDatasets';
import HomeHeader from './HomeHeader';
import TopCompetitions from './TopCompetitions';

import './Home.css'

const Home = () => {
   return (
		<Fragment>
			<HomeHeader />
			<TopDatasets />
			<TopCompetitions />
		</Fragment>
   )
}

export default Home;