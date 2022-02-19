import { BrowserRouter , Routes , Route } from "react-router-dom";
import App from "./App";
import EnterSAO from "./EnterSAO";
import Profile from "./Profile";

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={ <App/> } />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/EnterSAO" element={<EnterSAO/>} />
            
           
        </Routes>
        </BrowserRouter>
    )
}

export default Router;