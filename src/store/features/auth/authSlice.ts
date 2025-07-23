import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
    id:string,
    email:string,
    firstName?:string,
    lastName?:string
    token:string  // Auth token
}

interface AuthState{
    user : User | null, // null if not authenticated
    isAuthenticated : boolean,
    isLoading:boolean,
    error:String | null // If any auth error.
}

const initialState : AuthState = {
    user : null,
    isAuthenticated:false,
    isLoading:false,
    error:null,
}

// Create auth slice using createSlice.
export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        
    }
})

export default authSlice.reducer;
