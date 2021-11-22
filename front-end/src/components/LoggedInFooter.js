import React from 'react';

const LoggedInFooter = (props)=> {
    const { totalClasses } = props;

    return(<div className="clearfix footer">
        <div className="hint-text">Showing <b>{totalClasses}</b> entries</div>
    </div>);
}

export default LoggedInFooter;