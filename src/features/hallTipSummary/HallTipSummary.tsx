import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import {
  DataGrid,
  GridActionsCellItem,
  GridAddIcon,
  GridColDef,
  GridDeleteIcon,
  GridRowId,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

const HallTipSummary = () => {
  const EditToolbar = (props: EditToolbarProps) => {
    const { setRows } = props;

    const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [
        ...oldRows,
        { id, name: "", mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 },
      ]);
    };

    return (
      <GridToolbarContainer>
        <MuiButton color="primary" onClick={handleClick}>
          <GridAddIcon />
        </MuiButton>
      </GridToolbarContainer>
    );
  };
  const generateColumns = () => {
    const columns: GridColDef[] = [
      {
        field: "name",
        headerName: "Name",
        width: 120,
        editable: true,
        renderHeader: (params) => {
          return <b>{params.colDef.headerName}</b>;
        },
      },
    ];

    DAYS.forEach((day) => {
      columns.push({
        field: day.toLowerCase(),
        flex: 1,
        headerName: day,
        type: "number",
        editable: true,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderHeader: (params) => {
          return <b>{params.colDef.headerName}</b>;
        },
      });
    });

    columns.push({
      field: "actions",
      type: "actions",
      width: 20,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<GridDeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    });

    return columns;
  };

  const columns: GridColDef[] = generateColumns();

  const initialRows = [
    {
      id: randomId(),
      name: "John",
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
      sun: 7,
    },
  ];
  const [rows, setRows] = useState(initialRows);

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <MuiBox sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows },
        }}
        disableColumnSelector
        disableColumnMenu
      />
    </MuiBox>
  );
};

export default HallTipSummary;
