import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookByIdMutation } from '../../redux/books/booksApi';
import { ToastContainer } from 'react-toastify';
import { FormControl, FormControlLabel, MenuItem, Select, SelectChangeEvent, Switch, SwitchProps, styled } from '@mui/material';
import Spinner from '../Spinner';
import { dropdown } from '../../data/dropdown';
import { getToast } from '../../utils/toast';
import axios from 'axios';
import getBaseUrl from '../../utils/baseUrl';

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));

interface AddBookProps {
    img: string | File;
    title:  string;
    description : string;
    oldPrice : number;
    newPrice : number;
    category : string;
    isTrending : boolean;
  };
  
const initialBookValue: AddBookProps = {
    img : '',
    title : '',
    description : '',
    oldPrice : 0,
    newPrice : 0,
    category : '',
    isTrending : false,
}

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [bookData, setBookData] = useState<AddBookProps>(initialBookValue);
    const { data: BooksDataProps = {}, isLoading, isError, refetch } = useFetchBookByIdQuery(id);
    const [updateBookById, { isLoading: isUpdating, isError: isErrorUpdating }] = useUpdateBookByIdMutation();

    useEffect(() => {
        if (BooksDataProps && Object.keys(BooksDataProps).length > 0) {
            setBookData({
                img: BooksDataProps.coverImage || '',
                title: BooksDataProps.title || '',
                description: BooksDataProps.description || '',
                oldPrice: BooksDataProps.oldPrice || 0,
                newPrice: BooksDataProps.newPrice || 0,
                category: BooksDataProps.category || '',
                isTrending: BooksDataProps.isTrending || false,
            });
        }
    }, [BooksDataProps]);

    if(isLoading || isUpdating) return <Spinner />
    if(isError || isErrorUpdating) return <div>Error in Getting Book Details!</div>

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        if (name === 'oldPrice' || name === 'newPrice') {
            setBookData({
                ...bookData,
                [name]: parseFloat(value) || 0
            });
        } else {
            setBookData({
                ...bookData,
                [name]: value
            });
        }
    }

    const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBookData({
            ...bookData,
            isTrending: e.target.checked
        });
    }

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setBookData({
            ...bookData,
            category: event.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, bookData, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authentication': `Bearer ${localStorage.getItem('token')}`
                }
            })
            // await updateBookById({
            //     id,
            //     ...bookData
            // }).unwrap();
            await refetch();
            
            getToast('Successfully Edited the Book!', 'bottom-right');
            
            setTimeout(() => {
                navigate("/dashboard/manage-books");
            }, 2000);
        }
        catch(err){
            console.error("Error While Editing the Book Details!", err);
            getToast('Failed to update the book!', 'error');
        }
    }

    return (
        <div>
        <div className="flex flex-col md:flex-row items-center h-72 justify-center gap-4">
             <div className="h-72 flex-shrink-0">
                 <img
                     src={`/books/${BooksDataProps.coverImage}`}
                     alt=""
                     className="w-full bg-cover p-2 rounded-md cursor-pointer "
                 />
             </div>
 
             <div className='p-4 flex flex-col justify-start items-start text-start w-[250px] md:w-[500px]'>
                 <form className='flex flex-col gap-4 items-start w-full ' onSubmit={handleSubmit}>
                        <h2 className='text-2xl text-text font-semibold'>Edit Book Details Here</h2>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Title</label>
                            <input 
                                type="text" 
                                id="title" 
                                name="title" 
                                value={bookData?.title}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Book Name"  
                                onChange={handleInputChange} 
                                required
                            />
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Description</label>
                            <input 
                                type="text" 
                                id="description" 
                                name="description" 
                                value={bookData?.description}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Description" 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Category</label>
                            <div className='w-full max-w-[200px] mt-2'>
                                <FormControl fullWidth >
                                <Select
                                    value={bookData?.category || 'choose a genre'}
                                    onChange={handleCategoryChange}
                                    displayEmpty
                                    className="h-8 sm:h-10 text-xs sm:text-sm"
                                    style={{ 
                                    backgroundColor: '#f3f4f6', 
                                    fontSize: '0.875rem',
                                    padding: '0',
                                    height: '40px',
                                    width: '200px',
                                    textAlign: 'start',
                                    borderRadius: '6px'
                                    }}
                                    sx={{
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }
                                    }}
                                >
                                    {dropdown.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                            </div>
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <FormControlLabel
                                control={
                                    <IOSSwitch
                                        sx={{ m: 1 }} 
                                        checked={bookData.isTrending}
                                        onChange={handleSwitchChange}
                                    />
                                }
                                label="Is Trending"
                            />
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Old Price</label>
                            <input 
                                type="number" 
                                id="oldPrice" 
                                name="oldPrice" 
                                value={bookData.oldPrice || ''}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Old Price" 
                                onChange={handleInputChange} 
                                min="0"
                                step="0.01"
                                required
                            />
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>New Price</label>
                            <input 
                                type="number" 
                                id="newPrice" 
                                name="newPrice" 
                                value={bookData.newPrice || ''}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter New Price" 
                                onChange={handleInputChange} 
                                min="0"
                                step="0.01"
                                required
                            />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <button 
                            type='submit' 
                            className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' >Save</button>
                            <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard/manage-books")}> Back to Dashboard</button>
                        </div>
                    </form>
             </div>
         </div>
         <ToastContainer
             position="bottom-right"
             autoClose={2000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick={false}
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="light"
         />
     </div>
    )
}

export default EditBook;