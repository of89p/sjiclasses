import React, {useState} from 'react';
import Navbar from './navbar';
import GoogleLogin from 'react-google-login';
import M from 'materialize-css';
import axios from 'axios';

function Add(){
    const [name, setName] = useState(0);
    const [googleId, setGoogleId] = useState(0);
    const [stage, setStage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [studentClass, setStudentClass] = useState(0);
    const [previous_class, setPrevious_class] = useState(0);
    const [pic, setPic] = useState(0);
    
    const responseGoogle = (response) => {
        // console.log(response);
    }
    
    const success = (response) => {
        // console.log(response);
        const email = response.xt.du;
        if (/@sji.edu.sg\s*$/.test(email)) {
            const name = response.xt.vT;
            const googleId = response.tokenId;
            let previous_class = response.xt.sV;
            previous_class= previous_class.substring(0, previous_class.length - 4);
            const pic = response.xt.iK;
            setStage('1');
            setName(name);
            setGoogleId(googleId);
            setPercentage('33%');
            setPrevious_class(previous_class);
            setPic(pic)
        } else {
            M.toast({html: 'Use an SJI email!'});
        }
    }

    const saveClass = (studentClass) => {
        setStage('2');
        setStudentClass(studentClass);
        setPercentage('66%');
    }
    // https://amazing-galileo-55dae6.netlify.app?name=${name}&new_class=${studentClass}&picture_url='abc'&previous_class='abc'&google_id=${googleId}
    const submit = () => {
        axios.get(`https://thebuses.000webhostapp.com/random/sjiclasses/add?name=${name}&new_class=${studentClass}&picture_url=${pic}&previous_class=${previous_class}&google_id=${googleId}`)
            .then( (response) => {
                // console.log("response", response);
                // this.setState({
                // fetchUser: response.data
                // });
                // console.log("fetchUser", this.state.fetchUser);
                setStage('3');
                // console.log(response);
                setPercentage('100%');
            })
            .catch( (error) => {
                console.log(error);
        });  
    }

    const chooseRender = () => {
        // console.log(stage);
        if(stage === 0){
            return(
                <React.Fragment>
                    <h1>Declare your class</h1>
                    <p>If you have logged in with Google but nothing happens, and you are using the Safari browser, use chrome instead.</p>
                    <GoogleLogin
                        clientId="426198628749-f9vsh5h4njsqf6bljh0tqiv2tebj9m4e.apps.googleusercontent.com"
                        buttonText="SJI account"
                        onSuccess={success}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </React.Fragment>
            );
        } else if (stage === '1') {
            return(
                <React.Fragment>
                    <h1>Which is your class?</h1>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('FN 501')}} className="waves-effect waves-light btn-large">FN 501</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('FN 502')}} className="waves-effect waves-light btn-large">FN 502</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('FN 503')}} className="waves-effect waves-light btn-large">FN 503</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('FN 504')}} className="waves-effect waves-light btn-large">FN 504</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('FN 505')}} className="waves-effect waves-light btn-large">FN 505</button>

                        <button style={{margin:"10px"}} onClick={() => {saveClass('LE 506')}} className="waves-effect waves-light btn-large">LE 506</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('LE 507')}} className="waves-effect waves-light btn-large">LE 507</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('LE 508')}} className="waves-effect waves-light btn-large">LE 508</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('LE 509')}} className="waves-effect waves-light btn-large">LE 509</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('LE 510')}} className="waves-effect waves-light btn-large">LE 510</button>

                        <button style={{margin:"10px"}} onClick={() => {saveClass('ML 511')}} className="waves-effect waves-light btn-large">ML 511</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('ML 512')}} className="waves-effect waves-light btn-large">ML 512</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('ML 513')}} className="waves-effect waves-light btn-large">ML 513</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('ML 514')}} className="waves-effect waves-light btn-large">ML 514</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('ML 515')}} className="waves-effect waves-light btn-large">ML 515</button>

                        <button style={{margin:"10px"}} onClick={() => {saveClass('MN 516')}} className="waves-effect waves-light btn-large">MN 516</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('MN 517')}} className="waves-effect waves-light btn-large">MN 517</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('MN 518')}} className="waves-effect waves-light btn-large">MN 518</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('MN 519')}} className="waves-effect waves-light btn-large">MN 519</button>
                        <button style={{margin:"10px"}} onClick={() => {saveClass('MN 520')}} className="waves-effect waves-light btn-large">MN 520</button>
                        <br/><br/><br/><br/><br/><br/>
                </React.Fragment>
            );
        } else if (stage === '2') {
            return(
                <React.Fragment>
                    <h1>Confirm that your class is <span style={{fontWeight:"bold",color:"#ff1744"}}>{studentClass}</span></h1>
                    <h4>You can't change the class once you declared it</h4><br/><br/>
                    <a onClick={() => {setStage('1');setPercentage('33%')}} className="waves-effect waves-light btn-large"  style={{margin:"20px 60px 0 0"}}><i class="material-icons left">arrow_back</i>There is a mistake, change the class</a>
                    <a onClick={() => {submit()}} className="waves-effect waves-light btn-large" style={{margin:"20px 0 0 0"}}><i class="material-icons right">arrow_forward</i>Class chosen is correct, submit</a>
                </React.Fragment>
            );
        } else if (stage === '3') {
            return(
                <React.Fragment>
                    <h1>Success</h1>
                    <a href="/" className="waves-effect waves-light btn-large">View your class</a>
                </React.Fragment>
            );
        }
    }

    return(
        <React.Fragment>
            <Navbar/>
            <div className="container">
                <br/><br/>
                <div className="progress">
                    <div className="determinate" style={{width: percentage}} />
                </div>
                {chooseRender()}
            </div>
        </React.Fragment>
    );
}

export default Add;
