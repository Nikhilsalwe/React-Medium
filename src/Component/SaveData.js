import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SaveData = (props) => {
    return (
        <div className="col-md-12">
        <label>User Saved Data</label>
            <div className="col-md-12">
                <p>UserName: - {props.userData.userName}</p>
            </div>
            <div className="col-md-12">
                <p>LastName: - {props.userData.lastName}</p>
            </div>
            <div className="col-md-12">
                <p>TechnologySkills: - {props.userData.technologySkill.NODE ? "Node" : ''}, {props.userData.technologySkill.REACT ? "React" : ''}, {props.userData.technologySkill.ANGULAR ? "Angular" : ''}</p>
            </div>
            <div className="col-md-12">
                <p>UserName: - {props.userData.experienceTotal}</p>
            </div>
        </div>
    )
}

export default SaveData;