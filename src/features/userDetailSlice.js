import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const resp=await fetch('https://65095fb2f6553137159b4d14.mockapi.io/crud1',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)

    })
    try{
        const result=await resp.json();
        return result;
   

    }catch(error){
        return rejectWithValue(error)
        //console.log("error")

    }

    
    

})
//read action
export const showUser=createAsyncThunk("showUser",async(args,{rejectWithValue})=>{
    const resp=await fetch("https://65095fb2f6553137159b4d14.mockapi.io/crud1");
    try{
        const result=await resp.json();
        return result;
        
    }catch(error){
        return rejectWithValue(error);


    }
})
//delete user
export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    const resp=await fetch(`https://65095fb2f6553137159b4d14.mockapi.io/crud1/${id}`,{method:"DELETE"})
 try{
        const result=await resp.json();
        return result;
        
    }catch(error){
        return rejectWithValue(error);


    }
})
//update user
export const updateUser=createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
    const resp=await fetch(`https://65095fb2f6553137159b4d14.mockapi.io/crud1/${data.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)

    })
    try{
        const result=await resp.json();
        return result;
   

    }catch(error){
        return rejectWithValue(error)
        //console.log("error")

    }

    
    

})
export const userDetail=createSlice({
    name:"userDetail",
    initialState :{
        users:[],
        loading:false,
        error:null,
        searchData:[],
    },
    reducers:{
        searchUser:(state,action)=>{
            state.searchData=action.payload

        }
    },
        extraReducers:{
            [createUser.pending]:(state)=>{
                state.loading=true;

            },
            [createUser.fulfilled]:(state,action)=>{
                state.loading=false;
                state.users.push(action.payload)

            },
            [createUser.rejected]:(state,action)=>{
                state.loading=false;
                state.error=(action.payload)

            },
            [showUser.pending]:(state)=>{
                state.loading=true;

            },
            [showUser.fulfilled]:(state,action)=>{
                state.loading=false;
                state.users=(action.payload)

            },
            [showUser.rejected]:(state,action)=>{
                state.loading=false;
                state.error=(action.payload)

            },
            [deleteUser.pending]:(state)=>{
                state.loading=true;

            },
            [deleteUser.fulfilled]:(state,action)=>{
                state.loading=false;
                const {id}=action.payload;
                if(id){
                    state.users=state.users.filter((ele)=>ele.id!==id)
                }
                console.log("delete payload",action.payload)

            },
            [deleteUser.rejected]:(state,action)=>{
                state.loading=false;
                state.error=(action.payload)

            },
            [updateUser.pending]:(state)=>{
                state.loading=true;

            },
            [updateUser.fulfilled]:(state,action)=>{
                state.loading=false;
                state.users=state.users.map((ele)=>ele.id===action.payload.id?action.payload:ele)

            },
            [updateUser.rejected]:(state,action)=>{
                state.loading=false;
                state.error=(action.payload)

            },
        },
    


});
export default userDetail.reducer;
export const {searchUser}=userDetail.actions
    
