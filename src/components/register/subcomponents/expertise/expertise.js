import React, {useState} from 'react';
import {scoreClassifier} from './utils';


import './expertise.scss';

import blueCircle from '../../assets/circlePlus.svg';
export default function Expertise() {
     
    const blankState = { name:'', score: 0, unit: 0 }
    const [state, stateChanger] = useState([
        {...blankState}
      ]);

    const handleFormChange = (e)=>{
        const updatedState = [...state];
        updatedState[e.target.dataset.idx][e.target.name] = e.target.value;
        stateChanger(updatedState);
        console.log(state)
    }

    const calculateGPA = () => {
        const points = state.reduce((previous, current)=>{
            previous+=scoreClassifier(current['score']) * current['unit']
            return previous
        }, 0)

        const units = state.reduce((previous, current)=>{
            previous+=current['unit']
            return previous
        }, 0)

        if (!(points && units)){
            alert(`your current GPA is ${0}`);
            stateChanger([{...blankState}])
            return;
        }
        const gpa = points/units;
        alert(`your current GPA is ${gpa}`);
    }


    return (
        <div className="expertise">

            <div className="personaldetails__heading">
                <div className="personaldetails__heading__header">
                    GPA Calculator
                </div>
            </div>

            <div className="expertise__formsection">

                <div className="expertise__formsection__section">
                    <div className="expertise__formsection__section__header">
                        <div className="--heading">Calculate your current GPA</div>
                        <div className="--sub_heading">
                            Input the name of the course, unit and your score
                        </div>
                    </div>
                    
                    {
                        state.map((val, idx) => {
                            const nameId = `name-${idx}`;
                            const scoreId = `score-${idx}`;
                            const unitId = `unit-${idx}`;

                            return (
                                <div key={nameId} className="expertise__formsection__section__form">
                                    <div className="--input_wrapper">
                                        <label htmlFor="position">#{idx+1} Course Name </label>
                                        <input
                                            name="name"
                                            type="text"
                                            maxLength="30"
                                            placeholder="Eg. Computer science"
                                            onChange={handleFormChange}
                                            value={val.name}
                                            data-idx={idx}
                                        />
                                    </div>


                                    <div className="--input_wrapper">
                                        <label htmlFor="dates">Score</label>
                                        <div className="--date_wrapper">
                                            <input
                                                type="number"
                                                name="score"
                                                max="100"
                                                placeholder="score"
                                                id={scoreId}
                                                onChange={handleFormChange}
                                                value={val.score}
                                                data-idx={idx}
                                            />
                                            <span>Unit:</span>
                                            <input
                                                type="number"
                                                max="10"
                                                name="unit"
                                                placeholder="unit"
                                                id={unitId}
                                                onChange={handleFormChange}
                                                data-idx={idx}
                                                value={val.unit}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <div 
                        className="expertise__formsection__section__footer"
                        onClick = {() => {
                            stateChanger([
                                ...state,
                                {...blankState}
                            ])
                        }}
                    >
                        <img 
                            src={blueCircle}
                            alt=""
                        />
                        <span>
                            Add New Course
                        </span>
                    </div>
                </div>


                    


            </div>

            <div className="expertise__footer">

                <div className="--button_group">

                    <div
                        className="next"
                        onClick={calculateGPA}
                    >
                        Calculate
                    </div>

                </div>
            </div>
        </div>
    )
}
