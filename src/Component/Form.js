import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Form = (props) => {
    return (
        <div className="col-md-6">
            <form>
                <div className="form-group">
                    <label htmlFor="userName">UserName</label>
                    <input type="text" className="form-control" name="userName" placeholder="Enter First Name" value={props.userData.userName} onChange={props.formHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Enter Last Name" value={props.userData.lastName} onChange={props.formHandler} />
                </div>
                <div className="row col-md-12 form-group">
                    <label className="col-md-12">TechnologySkills: -</label>
                    <div className="col-md-4" ><input type="checkbox" onChange={props.checkboxHandler} value="NODE" checked={props.userData.technologySkill["NODE"]} name="tech" /> Node</div>
                    <div className="col-md-4" ><input type="checkbox" onChange={props.checkboxHandler} value="REACT" checked={props.userData.technologySkill["REACT"]} name="tech" /> React</div>
                    <div className="col-md-4" ><input type="checkbox" onChange={props.checkboxHandler} value="ANGULAR" checked={props.userData.technologySkill["ANGULAR"]} name="tech" /> Angular</div>
                </div>

                <div className="row col-md-12 form-group">
                    <label className="col-md-3" htmlFor="lastName">Experience</label>
                    <div className="col-md-3">{props.userData.experienceTotal}</div>
                    <button className="col-md-3 btn btn-info" onClick={props.increaseCounter}>+</button>
                </div>
                <div className="form-group">
                    <button onClick={props.saveUserData} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form;