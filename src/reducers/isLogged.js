const loggedReducer = (state = false, action)=>{
    switch(action.type){
        case 'SIGN_UP':
            return !state; //state=true
        default:
            return state;
    }
};

export default loggedReducer;