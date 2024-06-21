import {create} from 'zustand';

export const useCounter=create((set)=>({
    counter1:10,
    counter2:20,
    changeCounter1:()=>set(state=>({counter1:state.counter1+1})),
    changeCounter2:()=>set(state=>({counter2:state.counter2+1}))
}))