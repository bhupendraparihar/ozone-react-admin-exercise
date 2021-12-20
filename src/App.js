import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { AccountsList } from './accounts';
import fakeDataProvider from 'ra-data-fakerest';
import { accountsData } from "./accounts-data";

const dataProvider = fakeDataProvider(accountsData)

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="accounts" list={AccountsList} />
    </Admin>
);

export default App;
