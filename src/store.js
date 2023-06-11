import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
        reducer: {
            counter: (state = 0, action) => {
                switch (action.type) {
                    case 'increment':
                        return state + 1;
                    case 'decrement':
                        return state - 1;
                    case 'addNum':
                        return state + action.payload;
                    default:
                        return state;
                }
            }
        },
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ],
        devTools: true,
});

export default store;