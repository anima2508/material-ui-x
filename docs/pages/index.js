//import LandingPage from '@material-ui/monorepo/docs/pages/index';
//export default LandingPage;

import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

const columns = [
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'condClass', headerName: 'Conductor Class', flex: 2},
    { field: 'condDesc', headerName: 'Description', flex: 1},
    { field: 'condCont', headerName: 'Conductor Cont.', type: 'date', flex: 1},
    { field: 'gravityDisplay', headerName: 'Gravity', type: 'number', flex: 1},
    { field: 'isActive', headerName: 'Active', flex: 1},
  ];

export default (props) => {
    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                showToolbar
                components={{
                  Toolbar: GridToolbar,
                }}
                columns={columns}
                rows={[]}
            />
        </div>
    );
}