import { useState } from "react"

// Components
import CollapsiblePanel from "../components/CollapsiblePanel"
import ClassGridIcon from "../components/ClassGridIcon"

// Assets
import { ELEMENTALIST_ICON, ENGINEER_ICON, GUARDIAN_ICON, MESMER_ICON, NECROMANCER_ICON, RANGER_ICON, REVENANT_ICON, THIEF_ICON, WARRIOR_ICON, WING_1_LS, WING_2_LS, WING_3_LS, WING_4_LS, WING_5_LS, WING_6_LS, WING_7_LS } from "../assets/exports"
import { GWClass, GWClassExtended, GWRaid } from "../utils/types"



const RCT = () => {
    const [ resultClass, setResultClass ] = useState<GWClassExtended>()
    const [ resultWing, setResultWing ] = useState<GWRaid>()

    // Fun Selectors
    const [ guardEnabled, setGuardEnabled] = useState<boolean>(true)
    const [ warriorEnabled, setWarriorEnabled] = useState<boolean>(true)
    const [ revenantEnabled, setRevenantEnabled] = useState<boolean>(true)
    const [ engineerEnabled, setEngineerEnabled] = useState<boolean>(true)
    const [ thiefEnabled, setThiefEnabled] = useState<boolean>(true)
    const [ rangerEnabled, setRangerEnabled] = useState<boolean>(true)
    const [ mesmerEnabled, setMesmerEnabled] = useState<boolean>(true)
    const [ necromancerEnabled, setNecromancerEnabled] = useState<boolean>(true)
    const [ elementalistEnabled, setElementalistEnabled] = useState<boolean>(true)

    const [ wing1Enabled, setWing1Enabled] = useState<boolean>(true)
    const [ wing2Enabled, setWing2Enabled] = useState<boolean>(true)
    const [ wing3Enabled, setWing3Enabled] = useState<boolean>(true)
    const [ wing4Enabled, setWing4Enabled] = useState<boolean>(true)
    const [ wing5Enabled, setWing5Enabled] = useState<boolean>(true)
    const [ wing6Enabled, setWing6Enabled] = useState<boolean>(true)
    const [ wing7Enabled, setWing7Enabled] = useState<boolean>(true)

    function generateResult() {
        if ((!guardEnabled && !warriorEnabled && !revenantEnabled && !engineerEnabled && !thiefEnabled && !rangerEnabled && !mesmerEnabled && !necromancerEnabled && !elementalistEnabled) || (!wing1Enabled && !wing2Enabled && !wing3Enabled && !wing4Enabled && !wing5Enabled && !wing6Enabled && !wing7Enabled)) {
            console.log('no')
            return
        }
        let randomClassCheck = undefined
        let randomWingCheck = undefined

        let randomNumber

        while (randomClassCheck === undefined) {
            randomNumber = Math.floor(Math.random() * 9) + 1;
            switch (randomNumber) {
                case 1:
                    if(guardEnabled) {
                        setResultClass (classList.guard as GWClassExtended)
                        randomClassCheck = classList.guard
                    }
                    break;
                case 2:
                    if(warriorEnabled) {
                        setResultClass (classList.warrior as GWClassExtended)
                        randomClassCheck = classList.warrior
                    }
                    break;
                case 3:
                    if(revenantEnabled) {
                        setResultClass (classList.rev as GWClassExtended)
                        randomClassCheck = classList.rev
                    }
                    break;
                case 4:
                    if(engineerEnabled) {
                        setResultClass (classList.eng as GWClassExtended)
                        randomClassCheck = classList.eng
                    }
                    break;
                case 5:
                    if(thiefEnabled) {
                        setResultClass (classList.thief as GWClassExtended)
                        randomClassCheck = classList.thief
                    }
                    break;
                case 6:
                    if(rangerEnabled) {
                        setResultClass (classList.ranger as GWClassExtended)
                        randomClassCheck = classList.ranger
                    }
                    break;
                case 7:
                    if(mesmerEnabled) {
                        setResultClass (classList.mesmer as GWClassExtended)
                        randomClassCheck = classList.mesmer
                    }
                    break;
                case 8:
                    if(necromancerEnabled) {
                        setResultClass (classList.necro as GWClassExtended)
                        randomClassCheck = classList.necro
                    }
                    break;
                case 9:
                    if(elementalistEnabled) {
                        setResultClass (classList.ele as GWClassExtended)
                        randomClassCheck = classList.ele
                    }
                    break;
            }
        }
        while (randomWingCheck === undefined) {
            randomNumber = Math.floor(Math.random() * Object.keys(wingList).length) + 1;
            switch (randomNumber) {
                case 1:
                    if(wing1Enabled) {
                        setResultWing(wingList.wing1)
                        randomWingCheck = wingList.wing1
                    }
                    break;
                case 2:
                    if(wing2Enabled) {
                        setResultWing(wingList.wing2)
                        randomWingCheck = wingList.wing2
                    }
                    break;
                case 3:
                    if(wing3Enabled) {
                        setResultWing(wingList.wing3)
                        randomWingCheck = wingList.wing3
                    }
                    break;
                case 4:
                    if(wing4Enabled) {
                        setResultWing(wingList.wing4)
                        randomWingCheck = wingList.wing4
                    }
                    break;
                case 5:
                    if(wing5Enabled) {
                        setResultWing(wingList.wing5)
                        randomWingCheck = wingList.wing5
                    }
                    break;
                case 6:
                    if(wing6Enabled) {
                        setResultWing(wingList.wing6)
                        randomWingCheck = wingList.wing6
                    }
                    break;
                case 7:
                    if(wing7Enabled) {
                        setResultWing(wingList.wing7)
                        randomWingCheck = wingList.wing7
                    }
                    break;
            }
        }

        console.log(randomClassCheck, randomWingCheck.name)
    }

    return (
        <div className="rct">
            <div className="content">
                <CollapsiblePanel title="How to use the randomizer" text="Disabled the classes and wings you dont want to include in the randomizer and click on generate! Clicking on the panel again will result in a new generated combination." />
                <div className="input-grid">
                    <div className="left-side">
                        <div className="class-grid">
                            <div className={guardEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={GUARDIAN_ICON} enabled={guardEnabled} setEnabled={setGuardEnabled} />
                            </div>
                            <div className={warriorEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={WARRIOR_ICON} enabled={warriorEnabled} setEnabled={setWarriorEnabled} />
                            </div>
                            <div className={revenantEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={REVENANT_ICON} enabled={revenantEnabled} setEnabled={setRevenantEnabled} />
                            </div>
                            <div className={engineerEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={ENGINEER_ICON} enabled={engineerEnabled} setEnabled={setEngineerEnabled} />
                            </div>
                            <div className={thiefEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={THIEF_ICON} enabled={thiefEnabled} setEnabled={setThiefEnabled} />
                            </div>
                            <div className={rangerEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={RANGER_ICON} enabled={rangerEnabled} setEnabled={setRangerEnabled} />
                            </div>
                            <div className={mesmerEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={MESMER_ICON} enabled={mesmerEnabled} setEnabled={setMesmerEnabled} />
                            </div>
                            <div className={necromancerEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={NECROMANCER_ICON} enabled={necromancerEnabled} setEnabled={setNecromancerEnabled} />
                            </div>
                            <div className={elementalistEnabled ? "icon-container icon-scale" : "icon-container"}>
                                <ClassGridIcon scaleThis={.75} icon={ELEMENTALIST_ICON} enabled={elementalistEnabled} setEnabled={setElementalistEnabled} />
                            </div>
                        </div>
                        <div className="raid-list">
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_1_LS} enabled={wing1Enabled} setEnabled={setWing1Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_2_LS} enabled={wing2Enabled} setEnabled={setWing2Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_3_LS} enabled={wing3Enabled} setEnabled={setWing3Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_4_LS} enabled={wing4Enabled} setEnabled={setWing4Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_5_LS} enabled={wing5Enabled} setEnabled={setWing5Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_6_LS} enabled={wing6Enabled} setEnabled={setWing6Enabled} />
                            </div>
                            <div className="wing-container">
                                <ClassGridIcon scaleThis={.95} icon={WING_7_LS} enabled={wing7Enabled} setEnabled={setWing7Enabled} />
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div onClick={() => generateResult()} className="result-panel">
                            {
                                resultWing && resultClass ? 
                                    <img src={resultWing.thumbnail} alt="" />
                                : <></>
                            }
                            <div className="text">
                                {
                                    resultWing && resultClass ? 
                                    <>
                                        <span style={{ color: resultClass.color, fontWeight: 600, letterSpacing: '.1rem' }}>{resultClass.display}</span> in {resultWing.name}
                                    </> : <>Generate random raid!</>
                                }
                                
                            </div>
                        </div>
                        <div className="stat-row">
                            <div className="stat-panel">
                                <div className="title">[nox] stats</div>
                                <div className="stat-table">
                                    <div className="class noTopBoder noLeftBorder">Wing</div>
                                    <div className="wing noTopBoder">1</div>
                                    <div className="wing noTopBoder">2</div>
                                    <div className="wing noTopBoder">3</div>
                                    <div className="wing noTopBoder">4</div>
                                    <div className="wing noTopBoder">5</div>
                                    <div className="wing noTopBoder">6</div>
                                    <div className="wing noTopBoder noRightBorder">7</div>

                                    <div className="class noLeftBorder">Guadian</div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Warrior</div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Revenant</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Engineer</div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Thief</div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Ranger</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing"> </div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Mesmer</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder">Necro</div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing"> </div>
                                    <div className="wing">X</div>
                                    <div className="wing">X</div>
                                    <div className="wing noRightBorder"> </div>

                                    <div className="class noLeftBorder noBottomBorder">Elementalist</div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder"> </div>
                                    <div className="wing noBottomBorder noRightBorder"> </div>
                                </div>
                            </div>
                            <div className="stat-panel"> 
                                <div className="title">Create your own table <i>(Comin&nbsp;soon™)</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RCT

const classList = {
    guard: {
        display: 'Guardian',
        color: '#6791e2'
    },
    warrior: {
        display: 'Warrior',
        color: '#e5c868'
    },
    rev: {
        display: 'Revenant',
        color: '#751e1d'
    },
    eng: {
        display: 'Engineer',
        color: '#dea43f'
    },
    thief: {
        display: 'Thief',
        color: '#e02626'
    },
    ranger: {
        display: 'Ranger',
        color: '#9bd24d'
    },
    mesmer: {
        display: 'Mesmer',
        color: '#8c1d9f'
    },
    necro: {
        display: 'Necromancer',
        color: '#15760f'
    },
    ele: {
        display: 'Elementalist',
        color: '#f35c5a'
    },
}

const wingList = {
    wing1: {
        name: 'Spirit Vale',
        thumbnail: WING_1_LS
    },
    wing2: {
        name: 'Salvation Pass',
        thumbnail: WING_2_LS
    },
    wing3: {
        name: 'Stronghold of the Faithful',
        thumbnail: WING_3_LS
    },
    wing4: {
        name: 'Bastion of the Penitent',
        thumbnail: WING_4_LS
    },
    wing5: {
        name: 'Hall of Chains',
        thumbnail: WING_5_LS
    },
    wing6: {
        name: 'Mythwright Gambit',
        thumbnail: WING_6_LS
    },
    wing7: {
        name: 'The Key of Ahdashim',
        thumbnail: WING_7_LS
    }
}