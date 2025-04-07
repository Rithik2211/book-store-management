import { Paper } from '@mui/material';
import React from 'react';
import { DataGrid, GridColDef, GridValueFormatter, GridValueGetter } from '@mui/x-data-grid';
import { FilterBooksProps } from '../TopSellerSection';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import { useDeleteBookByIdMutation } from '../../redux/books/booksApi';

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
  refetch?: any;
}

const OrderTable: React.FC<OrderTableProps> = ({ books = bookRows, refetch }) => {
  const navigate = useNavigate();
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookByIdMutation();

  const handleEdit = (id: string) => {
    navigate(`/dashboard/edit-book/${id}`);
  };

  // Handle delete book action
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        alert("Book Deleted Successfully!");
        refetch();
      } catch (error) {
        console.error('Failed to delete the book:', error);
        alert('Failed to delete the book. Please try again.');
      }
    }
  };


  // Define columns for the book data
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', headerAlign: 'left', width: 200 },
    { field: 'category', headerName: 'Category', headerAlign: 'left', width: 130 },
    { 
      field: 'newPrice', 
      headerName: 'Price ($)', 
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 130,
      renderCell: (params: any) => {
        return (
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {
              `${Number(params.value).toFixed(2)}`
            }
          </div>
        );
      }
    },
    { field: 'actions', 
      headerName: 'Actions',
      headerAlign: 'left',
      width: 220,
      align: 'center',
      renderCell: (params: any) => {
        return (
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3', textAlign: 'center', marginTop: '6px' }}>
              <button 
               className='flex flex-row gap-2 justify-between items-center bg-white text-black border-black border-1 text-sm'
               onClick={() => handleEdit(params.row._id)}
               disabled={isDeleting}
               > <Pencil className='w-4 h-5' /> Edit </button>
              <button 
               className='flex flex-row gap-2 justify-between items-center text-sm' 
               onClick={() => handleDelete(params.row._id)}
               disabled={isDeleting}
               > <Trash2 className='w-4 h-5' /> Delete </button>
          </div>
        );
      }
    },
  ];

  return (
    <Paper sx={{ height: 400, width: '100%', margin: '10px 0' }}>
      <DataGrid
        rows={books.length > 0 ? books : bookRows}
        columns={columns}
        getRowId={(row) => row._id}
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