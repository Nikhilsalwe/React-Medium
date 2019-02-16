import React from 'react';

const Title = () => {
    const divStyle = {
        display: 'table',
        height: "100%",
        color: 'white'
    };
    const pStyle = {
        fontSize: '22px',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: "middle"
    };

    return <div className="col-md-6">
        <div style={divStyle}>
            <div style={pStyle}>
                <div>
                    This is simple example on stateful and functional component.
                </div>
            </div>
        </div>
    </div>
}

export default Title;