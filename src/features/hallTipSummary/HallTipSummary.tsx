import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import {
  DataGrid,
  GridAddIcon,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { random, randomId } from "@mui/x-data-grid-generator";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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

  return columns;
};

const columns: GridColDef[] = generateColumns();

const rows = [
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

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <MuiButton color="primary" startIcon={<GridAddIcon />} onClick={handleClick}>
        Add record
      </MuiButton>
    </GridToolbarContainer>
  );
}

const HallTipSummary = () => {
  // TODO: Example borrowed from https://mui.com/x/react-data-grid/
  // Require modification
  return (
    <MuiBox sx={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} disableColumnSelector disableColumnMenu />
    </MuiBox>
  );
};

export default HallTipSummary;
