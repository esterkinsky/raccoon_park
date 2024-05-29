import { useState } from "react";
import HomePage from "./pages/homePage/HomePage";
import FeedBackPage from "./pages/feedBackPage/FeedBackPage";

function App() {
    const [showComponent, setshowComponent] = useState("FeedBack");

    return (
        <div className="App">
            {showComponent === "Home" ? (
                <HomePage showComponent={setshowComponent} />
            ) : showComponent === "FeedBack" ? (
                <FeedBackPage showComponent={setshowComponent} />
            ) : (
                <>default</>
            )}
        </div>
    );
}

export default App;
