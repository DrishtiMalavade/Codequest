export const addData = (data) => ({
    type: "Login",
    payload: data,
});

export const removeData = () => ({
    type: "Logout",
    payload: "",
})

export const addProfile = (data) => ({
    type: "Set",
    payload: data,
})

export const clearProfile = () => ({
    type: "Clear",
    payload: "",
})

export const addLives = (p) => ({
    type: "ADDL",
    payload: p
});

export const addCoins = (p) => ({
    type: "ADDC",
    payload: p
});

export const cutLives = (p) => ({
    type: "CUTL",
    payload: p
});

export const cutCoins = (p) => ({
    type: "CUTC",
    payload: p
});

export const addlevels = (p) => ({
    type: "ADDLEVELS",
    payload: p
});

export const addtabs = (p) => ({
    type: "ADDTAB",
    payload: p
})
