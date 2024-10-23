import React, { useEffect, useReducer } from 'react';
import { employees } from '../sharing/data';
import RenderAsTable from './RenderAsTable';
import CustomInput from '../utils/CustomInput.addform';
import { INPUT_SIZE, INPUT_TYPE } from './InputSize';

const initialState = {
    fieldNames: [],
    data: [],
    addFormData: {},
    updateFormData: {},
    isVisibleUpdateForm: false,
    selectedData: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD_NAMES':
            return { ...state, fieldNames: action.payload };
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'SET_ADD_FORM_DATA':
            return { ...state, addFormData: action.payload };
        case 'SET_UPDATE_FORM_DATA':
            return { ...state, updateFormData: action.payload };
        case 'SET_VISIBLE_UPDATE_FORM':
            return { ...state, isVisibleUpdateForm: action.payload };
        case 'SET_SELECTED_DATA':
            return { ...state, selectedData: action.payload };
        default:
            return state;
    }
};

export default function DataComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (employees.length > 0) {
            dispatch({ type: 'SET_DATA', payload: employees });
            let fields = [];
            Object.keys(employees[0]).forEach(field => {
                if (field === 'address') {
                    fields = fields.concat(Object.keys(employees[0][field]));
                } else if (field === 'education') {
                    if (employees[0][field].length > 0) {
                        fields = fields.concat(Object.keys(employees[0][field][0]));
                    }
                } else if (field === 'workExperience') {
                    if (employees[0][field].length > 0) {
                        fields = fields.concat(Object.keys(employees[0][field][0]));
                    }
                } else if (typeof employees[0][field] !== 'object' || Array.isArray(employees[0][field])) {
                    fields.push(field);
                }
            });
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
        dispatch({ type: 'SET_SELECTED_DATA', payload: item });

        const initialUpdateFormData = {};
        Object.keys(item).forEach(field => {
            if (field !== 'id') {
                initialUpdateFormData[field] = item[field];
            }
        });
        dispatch({ type: 'SET_UPDATE_FORM_DATA', payload: initialUpdateFormData });
    };

    const handleDelete = (item) => {
        const updateDatas = state.data.filter(employee => employee !== item);
        dispatch({ type: 'SET_DATA', payload: updateDatas });
    };

    const handleAddInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_ADD_FORM_DATA', payload: { ...state.addFormData, [name]: value } });
    };

    const handleUpdateInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_UPDATE_FORM_DATA',
            payload: { ...state.updateFormData, [name]: value }
        });
    };

    const handleAdd = () => {
        const updateDatas = [...state.data, state.addFormData];
        dispatch({ type: 'SET_DATA', payload: updateDatas });

        const resetAddForm = {};
        state.fieldNames.forEach(field => {
            resetAddForm[field] = '';
        });
        dispatch({ type: 'SET_ADD_FORM_DATA', payload: resetAddForm });
    };

    const handleUpdateSubmit = () => {
        const index = state.data.findIndex(employee => employee.c_id === state.selectedData.c_id);
        const updateDatas = [...state.data];
        updateDatas[index] = { ...state.selectedData, ...state.updateFormData };

        dispatch({ type: 'SET_DATA', payload: updateDatas });
        dispatch({ type: 'SET_VISIBLE_UPDATE_FORM', payload: false });
        dispatch({ type: 'SET_SELECTED_DATA', payload: null });
    };

    const addFormInputs = state.fieldNames.length
        ? [
            { field: state.fieldNames[0], value: state.addFormData[state.fieldNames[0]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[1], value: state.addFormData[state.fieldNames[1]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[2], value: state.addFormData[state.fieldNames[2]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[3], value: state.addFormData[state.fieldNames[3]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[4], value: state.addFormData[state.fieldNames[4]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },

            { field: state.fieldNames[5], value: state.addFormData[state.fieldNames[5]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[6], value: state.addFormData[state.fieldNames[6]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[7], value: state.addFormData[state.fieldNames[7]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[8], value: state.addFormData[state.fieldNames[8]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },

            { field: state.fieldNames[9], value: state.addFormData[state.fieldNames[9]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[10], value: state.addFormData[state.fieldNames[10]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[11], value: state.addFormData[state.fieldNames[11]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.SMALL },

        ]
        : [];

    const updateFormInputs = state.fieldNames.length
        ? [
            { field: state.fieldNames[1], value: state.addFormData[state.fieldNames[1]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[2], value: state.addFormData[state.fieldNames[2]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[3], value: state.addFormData[state.fieldNames[3]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[4], value: state.addFormData[state.fieldNames[4]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },

            { field: state.fieldNames[5], value: state.addFormData[state.fieldNames[5]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[6], value: state.addFormData[state.fieldNames[6]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[7], value: state.addFormData[state.fieldNames[7]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[8], value: state.addFormData[state.fieldNames[8]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },

            { field: state.fieldNames[9], value: state.addFormData[state.fieldNames[9]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.MEDIUM },
            { field: state.fieldNames[10], value: state.addFormData[state.fieldNames[10]], type: INPUT_TYPE.TEXT, size: INPUT_SIZE.SMALL },
            { field: state.fieldNames[11], value: state.addFormData[state.fieldNames[11]], type: INPUT_TYPE.NUMBER, size: INPUT_SIZE.SMALL },
        ]
        : [];

    return (
        <div className="container mt-4">
            <h2>Employees Dashboard</h2>

            <div className="mb-4">
                <h4>Add employee</h4>
                {state.fieldNames.length > 0 && (
                    <CustomInput inputs={addFormInputs} handleChange={handleAddInputChange} />
                )}
                <div className='px-2'>
                    <button type="button" className="btn btn-primary" onClick={handleAdd}> Add Employee</button>
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
                data={state.data}
                showActionColumn={true}
                onClickUpdate={handleUpdate}
                onClickDelete={handleDelete}
            />
        </div>
    );
}
