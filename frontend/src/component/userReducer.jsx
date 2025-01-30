import { combineReducers } from "redux"

const initialState = {
    username: "",
    password: ""
}

const profileData = {
    fullName: "",
    bio: "",
    avatar: ""
}

const points = {
    coins: "",
    lives: ""
};

const levels = {
    levels: "",
    tabs: ""
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Login":
            return { ...state, username: action.payload.user, password: action.payload.pass }
        case "Logout":
            console.log("Ligout");
            return { ...state, userReducer: "", password: "" }
        default:
            console.log(state.username, "reducer");
            return state;

    }
}

const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case "Set":
            return { ...state, fullName: action.payload.fullname, avatar: action.payload.avatar, bio: action.payload.bio }
        case "Clear":
            return { ...state, fullName: "", bio: "", avatar: "" }
        default:
            return state;
    }
}

const userPoints = (state = points, action) => {
    switch (action.type) {
        case "ADDL":
            return { ...state, lives: action.payload };
        case "ADDC":
            return { ...state, coins: action.payload };
        case "CUTL":
            return { ...state, lives: action.payload };
        case "CUTC":
            return { ...state, coins: action.payload };
        default:
            return state;
    }
}

const userLevels = (state = levels, action) => {
    switch (action.type) {
        case "ADDTAB":
            return { ...state, tabs: action.payload }
        case "ADDLEVELS":
            return { ...state, levels: action.payload }
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    point: userPoints,
    levels: userLevels,
});

export default rootReducer;