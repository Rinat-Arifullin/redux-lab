import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: (state, action) => {
            switch (action.type) {
                case "INCREMENT":
                    return state + 1;
                case "DECREMENT":
                    return state - 1;
                    case "RESET":
                        return state = 0
                case "INCREMENT_BY_VALUE":
                    return state + action.payload
                default:
                    return 0;
            }
        }
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store;