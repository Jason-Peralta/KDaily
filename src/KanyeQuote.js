import React, {useEffect, useState} from "react";

//React Component function
export function Test() {
    //State Initializer for state variable Kanye, and the setter function setKanye
    const [Kanye, setKanye] = useState("");

    /*
        Asynchronous function that will perform the GET request. It will call the setKanye state setter function to set
        the value of the Kanye state variable to whatever is returned from the api request. In this case, the response
        body from the api request is parsed as a JSON object, and further stripped down, as the only thing returned is
        the "quote" variable from the response body. So setKanye is being called with only the value of the "quote"
        variable from the GET requests resonse body.
     */
    const fetchKanye = async () => {
        setKanye(
            await fetch("https://api.kanye.rest/")
                .then(response => response.json())
                .then(json => json.quote)
        )
    }

    /*
        UseEffect is a react component lifecycle hook whose purpose is to execute every time there is a change in state,
        or on the initial load of a component.
     */
    useEffect(() => {
        document.title = "Dog";
        fetchKanye().then(x => x)
    }, []);

    /*
        The remainder of this component function is where the output is determined and "rendered". If the Kanye state
        variable is equal to "", then you can make the assumption that the api call has either not finished executing or
        has run into an error while executing because "" is the default for that state variable - hence no change to it.
        If the Kanye variable is not equal to "", then you can make the assumption that there is a change to the Kanye
        state variable, and the component function will return and render a div tag with the data from the GET request
        that has executed properly.
     */
    if (Kanye === "") {
        return (
            <div>
                Data Not Loaded Yet.
            </div>
        )
    } else {
        return (
            <div>
                <button className="btn" onClick={() =>  {fetchKanye()}}> {Kanye} </button>

            </div>
        )
    }
}
