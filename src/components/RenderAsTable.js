export default function RenderAsTable({ data, showActionColumn, onClickUpdate, onClickDelete }) {
    const renderValue = (value) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
            return Object.values(value).join(', ');
        } else if (Array.isArray(value)) {
            return value.map((item, index) => {
                if (typeof item === 'object') {
                    return Object.values(item).join(', ');
                }
                return item;
            }).join('; ');
        }
        return value;
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                        {showActionColumn && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.keys(item).map((key, colIndex) => (
                                <td key={colIndex}>
                                    {renderValue(item[key])}
                                </td>
                            ))}
                            {showActionColumn && (
                                <td>
                                    <button 
                                        className="btn btn-warning btn-sm me-1"
                                        onClick={() => onClickUpdate(item)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onClickDelete(item)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
