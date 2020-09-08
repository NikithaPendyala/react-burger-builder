import React, {Fragment} from 'react';
import Burger from '../../components/Burger/Burger'

const burgerBuilder = () => (
    <Fragment>
        <Burger></Burger>
        <div>Burger controls</div>
    </Fragment>
);

export default burgerBuilder;