export const COUNTER_DOWN = "COUNTER_DOWN"
export const COUNTER_UP = "COUNTER_UP"

export const counter_down_action = (num) => {
    return {
        type: "COUNTER_DOWN",
        payload: num
    }
}

export const counter_up_action = (num) => {
    return {
        type: "COUNTER_UP",
        payload: num
    }
}
