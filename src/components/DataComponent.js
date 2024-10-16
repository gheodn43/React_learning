import React, { useEffect, useReducer } from 'react';
import { companies } from '../sharing/data';
import RenderAsTable from './RenderAsTable';
import CustomInput from '../utils/CustomInput.addform';
import { INPUT_SIZE, INPUT_TYPE } from './InputSize';

const initialState = {
    fieldNames: [],
    companyData: [],
    addFormData: {},
    updateFormData: {},
    isVisibleUpdateForm: false,
    selectedCompany: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD_NAMES':
            return { ...state, fieldNames: action.payload };
        case 'SET_COMPANY_DATA':
            return { ...state, companyData: action.payload };
        case 'SET_ADD_FORM_DATA':
            return { ...state, addFormData: action.payload };
        case 'SET_UPDATE_FORM_DATA':
            return { ...state, updateFormData: action.payload };
        case 'SET_VISIBLE_UPDATE_FORM':
            return { ...state, isVisibleUpdateForm: action.payload };
        case 'SET_SELECTED_COMPANY':
            return { ...state, selectedCompany: action.payload };
        default:
            return state;
    }
};

export default function DataComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (companies.length > 0) {
            dispatch({ type: 'SET_COMPANY_DATA', payload: companies });
            const fields = Object.keys(companies[0]);
            dispatch({ type: 'SET_FIELD_NAMES', payload: fields });

            const initialAddFormData = {};
            fields.forEach(field => {
                initialAddFormData[field] = '';
            });
            dispatch({ type: 'SET_ADD_FORM_DATA', payload: initialAddFormData });
        }
    }, []);

    const handleUpdate = (item) => {
        dispatch({ type: 'SET_VISIBLE_UPDATE_FORM', payload: true });
        dispatch({ type: 'SET_SELECTED_COMPANY', payload: item });

        const initialUpdateFormData = {};
        Object.keys(item).forEach(field => {
            if (field !== 'c_id') {
                initialUpdateFormData[field] = item[field];
            }
        });
        dispatch({ type: 'SET_UPDATE_FORM_DATA', payload: initialUpdateFormData });
    };

    const handleDelete = (item) => {
        const updatedCompanies = state.companyData.filter(company => company !== item);
        dispatch({ type: 'SET_COMPANY_DATA', payload: updatedCompanies });
    };

    const handleAddInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_ADD_FORM_DATA', payload: { ...state.addFormData, [name]: value }});
    };

    const handleUpdateInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_UPDATE_FORM_DATA',
            payload: { ...state.updateFormData, [name]: value }
        });
    };

    const handleAdd = () => {
        const updatedCompanies = [...state.companyData, state.addFormData];
        dispatch({ type: 'SET_COMPANY_DATA', payload: updatedCompanies });

        const resetAddForm = {};
        state.fieldNames.forEach(field => {
            resetAddForm[field] = '';
        });
        dispatch({ type: 'SET_ADD_FORM_DATA', payload: resetAddForm });
    };

    const handleUpdateSubmit = () => {
        const index = state.companyData.findIndex(company => company.c_id === state.selectedCompany.c_id);
        const updatedCompanies = [...state.companyData];
        updatedCompanies[index] = { ...state.selectedCompany, ...state.updateFormData };

        dispatch({ type: 'SET_COMPANY_DATA', payload: updatedCompanies });
        dispatch({ type: 'SET_VISIBLE_UPDATE_FORM', payload: false });
        dispatch({ type: 'SET_SELECTED_COMPANY', payload: null });
    };

    const addFormInputs = state.fieldNames.length
        ? [
            { field: state.fieldNames[0], value: state.addFormData[state.fieldNames[0]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[1], value: state.addFormData[state.fieldNames[1]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[2], value: state.addFormData[state.fieldNames[2]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[3], value: state.addFormData[state.fieldNames[3]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.FULL },
        ]
        : [];

    const updateFormInputs = state.fieldNames.length
        ? [
            { field: state.fieldNames[1], value: state.updateFormData[state.fieldNames[1]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[2], value: state.updateFormData[state.fieldNames[2]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[3], value: state.updateFormData[state.fieldNames[3]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.FULL },
        ]
        : [];

    return (
        <div className="container mt-4">
            <h2>Company Dashboard</h2>

            <div className="mb-4">
                <h4>Add Company</h4>
                {state.fieldNames.length > 0 && (
                    <CustomInput inputs={addFormInputs} handleChange={handleAddInputChange} />
                )}
                <div className='px-2'>
                    <button type="button" className="btn btn-primary" onClick={handleAdd}> Add Company</button>
                </div>
            </div>

            {state.isVisibleUpdateForm && (
                <div className="mb-4">
                    <h4>Update Company</h4>
                    {state.fieldNames.length > 0 && (
                        <CustomInput inputs={updateFormInputs} handleChange={handleUpdateInputChange} />
                    )}
                    <div className='d-flex gap-2 px-2'>
                        <button type="button" className="btn btn-success" onClick={handleUpdateSubmit}>Save Changes</button>
                        <button type="button" className="btn btn-secondary" onClick={() => dispatch({ type: 'SET_VISIBLE_UPDATE_FORM', payload: false })}>Cancel</button>
                    </div>
                </div>
            )}
            <RenderAsTable
                data={state.companyData}
                showActionColumn={true}
                onClickUpdate={handleUpdate}
                onClickDelete={handleDelete}
            />
        </div>
    );
}
