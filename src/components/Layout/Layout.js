import React, {Fragment} from 'react';

const layout = (props) => (
    <Fragment>
        <div>sidebar, toolbar, backdrop blah</div>
        {props.children}
    </Fragment>
)

export default layout;