import { Paper } from '@mui/material';
import React from 'react';
import { DataGrid, GridColDef, GridValueFormatter, GridValueGetter } from '@mui/x-data-grid';
import { FilterBooksProps } from '../TopSellerSection';

interface BookData {
  _id: string;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
  createdAt: string;
  __v: number;
}

// Define columns for the book data
const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 200 },
  { 
    field: 'description', 
    headerName: 'Description', 
    width: 300,
    renderCell: (params: any) => {
      return (
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {params.value}
        </div>
      );
    }
  },
  { field: 'category', headerName: 'Category', width: 130 },
  { 
    field: 'trending', 
    headerName: 'Trending', 
    width: 100,
    type: 'boolean'
  },
  // { 
  //   field: 'oldPrice', 
  //   headerName: 'Old Price ($)', 
  //   type: 'number',
  //   width: 120,
  //   valueFormatter: (params: any) => {
  //     if (params && params.value != null) {
  //       return `$${Number(params.value).toFixed(2)}`;
  //     }
  //     return '';
  //   }
  // },
  // { 
  //   field: 'newPrice', 
  //   headerName: 'New Price ($)', 
  //   type: 'number',
  //   width: 120,
  //   valueFormatter: (params: any) => {
  //     if (params && params.value != null) {
  //       return `$${Number(params.value).toFixed(2)}`;
  //     }
  //     return '';
  //   }
  // },
  // { 
  //   field: 'discount', 
  //   headerName: 'Discount (%)', 
  //   width: 120,
  //   valueGetter: (params: any) => {
  //     const oldPrice = params.row.oldPrice;
  //     const newPrice = params.row.newPrice;
  //     if (oldPrice && newPrice) {
  //       const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  //       return discount.toFixed(0);
  //     }
  //     return '0';
  //   },
  //   valueFormatter: (params: any) => {
  //     if (params && params.value != null) {
  //       return `${params.value}%`;
  //     }
  //     return '0%';
  //   }
  // },
];

// Example book data
const bookRows: BookData[] = [
  {
    "_id": "67ddc945e0213266a7f277f9",
    "title": "Four Thousand Weeks",
    "description": "Nobody needs to be told there isn't enough time. We're obsessed with our lengthening to-do lists, overfilled inboxes, work-life balance, and ceaseless battle against distraction; we're deluged with advice on becoming more productive and efficient",
    "category": "business",
    "trending": false,
    "coverImage": "book-20.png",
    "oldPrice": 24.99,
    "newPrice": 14.99,
    "createdAt": "2025-03-21T20:17:09.309Z",
    "__v": 0
  },
  {
    "_id": "67ddbcc18544d2c9d4d89ce0",
    "title": "Mastering SEO in 2024",
    "description": "Tips and tricks to boost your SEO and rank higher on search engines.",
    "category": "marketing",
    "trending": true,
    "coverImage": "book-3.png",
    "oldPrice": 39.99,
    "newPrice": 29.99,
    "createdAt": "2025-03-21T19:23:45.923Z",
    "__v": 0
  }
];

const paginationModel = { page: 0, pageSize: 5 };

interface OrderTableProps {
  books?: FilterBooksProps[];
}

const OrderTable: React.FC<OrderTableProps> = ({ books = bookRows }) => {
  return (
    <Paper sx={{ height: 400, width: '100%', margin: '10px 0' }}>
      <DataGrid
        rows={books}
        columns={columns}
        getRowId={(row) => row.title}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ 
          border: 0,
          '& .MuiDataGrid-cell': {
            textOverflow: 'ellipsis'
          }
        }}
      />
    </Paper>
  );
};

export default OrderTable;