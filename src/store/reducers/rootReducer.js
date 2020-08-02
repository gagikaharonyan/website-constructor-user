import {combineReducers} from "redux";
import SiteReducer from "./siteReducer";
import EventsReducer from "./eventsReducer";

const rootReducer = combineReducers({
    site: SiteReducer,
    events: EventsReducer,
});

export default rootReducer;