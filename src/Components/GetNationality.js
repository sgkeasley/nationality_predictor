// Create a function to iterate through the returned countries
// and display only the details for the first country in the array

function GetNationality(prop) {


    return (
        <div>
            {prop.nationality.map((country)=>(
                <div key={country.id}>
                    <p>Your nationality ID is: {country.country_id}</p>
                    <p>with a probability of: {Math.round(country.probability*100)}%</p>
                </div>
            ))[0]}
        </div>
    );
}

export default GetNationality;