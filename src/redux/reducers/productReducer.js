import { ActionTypes } from "../constants/action-type";

//reducer always take intial state and actions
const intialState = {
    products:[{
        id: 1,
        title:"Dipesh",
        category:"programmer",


    },
],
     
};
export const productReducer =(state,{type,payload})=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;

    }

}