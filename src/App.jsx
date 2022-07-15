import { Routes, Route } from "react-router-dom";
//styles 
import "./styles/App.scss";
import HomePage from "./pages/Homepage";
import PageNotFound from "./components/PageNotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    )
}


export default App;