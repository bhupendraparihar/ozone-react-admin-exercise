import * as React from "react";
import { useRecordContext } from 'react-admin';

const DateField = ({ source }) => {
    const record = useRecordContext();
    const today = new Date();
    const endDate = new Date(+record[source]);
    const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000) % 60); 

    return record ? (
        <span>
            { `${days} days ${hours} hours ${minutes} mins ${seconds} seconds`}
        </span>
    ) : null;
}

export default DateField;