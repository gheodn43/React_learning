import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'companiesSlice',
    initialState: [],
    reducers: {
        addCompany(state, action){
            state.push(action.payload);
        },
        removeCompany(state, action){
            // trả về một state mới khi xóa 
            return state.filter(company => company.id !== action.payload);
        },
        setCompanies(state, action){
            return action.payload;
        }
    }
})

export const {addCompany,  removeCompany, setCompanies} = slice.actions;
export default slice.reducer;