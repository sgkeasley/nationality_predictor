import { useState, useEffect } from 'react';
import GetNationality from './GetNationality';
import Name from './NameInput';

// Create a function to fetch data from the API and display
// the input and nationality details
export default function DisplayNationality() {

    let [submitName, setSubmitName] = useState("");
    let [nationality, setNationality] = useState([]);

    // Create a function to handle change
    function updateName(submitName) {
        setSubmitName(submitName);
        console.log(submitName);
    };

    useEffect(() => {
        async function fetchData() {
            let response = await
            fetch(`https://api.nationalize.io?name=${submitName}`);
            let data = await response.json();
            console.log(data.country)
            setNationality(data.country);
            
        }
        fetchData();
    }, [submitName])


    return (
        <div>
            <Name name={submitName} updateName={updateName} />
            <GetNationality nationality={nationality} />
        </div> 
    );
}