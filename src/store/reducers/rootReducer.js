import {combineReducers} from "redux";
import SiteReducer from "./siteReducer";
import EventsReducer from "./eventsReducer";
import PostsReducer from "./postsReducer";

const rootReducer = combineReducers({
    site: SiteReducer,
    events: EventsReducer,
    posts: PostsReducer
});

export default rootReducer;