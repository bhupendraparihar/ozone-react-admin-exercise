import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import DateField from "./DateField";

export const AccountsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="expiryDate" />
            
        </Datagrid>
    </List>
);
