import { FormControl, FormControlLabel, MenuItem, Select, SelectChangeEvent, styled, Switch, SwitchProps } from '@mui/material';
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { dropdown } from '../../data/dropdown';

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
    img: string;
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

const AddBooks = () => {
    const navigate = useNavigate();
    const [bookData, setBookData] = useState<AddBookProps>(initialBookValue);
    const [category, setCategory] = useState('choose a genre');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBookData({
            ...bookData,
            [e.target.name] : e.target.value
        })
    }

    const handleChange = (event: SelectChangeEvent) => {
        event.preventDefault();
        setCategory(event.target.value as string);
      };

    return (
        <div className='container max-w-screen-2xl w-full p-6 '>
        <div className='min-w-[500px] md:min-w-[550px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <form className='flex flex-col gap-4 items-start w-full' onSubmit={() => {}}>
                <h2 className='text-2xl text-text font-semibold'>Add Book Details Here</h2>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Title</label>
                    <input 
                        type="title" id="title" name="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter Book Name"  onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Description</label>
                    <input 
                        type="text" id="description" name="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter Description" onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Category</label>
                    <div className='w-full max-w-[200px] mt-2'>
                        <FormControl fullWidth >
                        <Select
                            value={category}
                            onChange={handleChange}
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
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label="Is Trending"
                    />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Old Price</label>
                    <input 
                        type="text" id="oldprice" name="oldPrice" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter Old Price" onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>New Price</label>
                    <input 
                        type="text" id="newprice" name="newPrice" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter New Price" onChange={(e) => handleInputChange(e)} />
                </div>
                <button type='submit' className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => navigate("/dashboard")} >Add Book</button>
            </form>
        </div>
        <ToastContainer
            position="top-center"
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

export default AddBooks;