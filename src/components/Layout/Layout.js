import React, {Fragment} from 'react';
import classes from './Layout.module.css';

const layout = (props) => (
    <Fragment>
        <div>sidebar, toolbar, backdrop blah</div>
        <p className={classes.Content}>test</p>
        {props.children}
    </Fragment>
)

export default layout;