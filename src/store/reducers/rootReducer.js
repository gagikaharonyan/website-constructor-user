import {combineReducers} from "redux";
import HomeReducer from "./homeReducer";
import SiteReducer from "./siteReducer";

const rootReducer = combineReducers({
    site: SiteReducer,
    home: HomeReducer,
})

export default rootReducer;