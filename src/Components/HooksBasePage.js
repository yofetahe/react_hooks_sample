import React, {useState, useEffect} from "react";
import useWindowResolution from "./UseWindowResolution";

function HooksBasedPage(props) {

    const[name, setName] = useState("Yof");
    const[location, setLocation] = useState("USA");
    
    //Option 1
    const resolution = useWindowResolution();

    //Option 2
    // const[resolution, setResolution] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // })

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleLocationChange(e){
        setLocation(e.target.value);
    }

    useEffect(() => {
        document.title = name + " from " + location;
    })

    // useEffect(() => {
    //     const handleResize = () => {
    //         setResolution({
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         })
    //     };
    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     }
    // })

    return(
        <section>
            <form autoComplete="off">
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" 
                        value={name} 
                        onChange={handleNameChange} />
                </section>
                <section>
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location"
                        value={location}
                        onChange={handleLocationChange} />
                </section>
            </form>
            <p>Hello {name} from {location}</p>
            <h3>
                {resolution.width} x {resolution.height}
            </h3>
        </section>
    );
}

export default HooksBasedPage;