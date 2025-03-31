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

const AddBooks = () => {
    const navigate = useNavigate();
    const [bookData, setBookData] = useState<AddBookProps>(initialBookValue);
    const [category, setCategory] = useState('choose a genre');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setBookData({
                ...bookData,
                img: file
            });
            
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        if (!bookData.title.trim()) {
            return false;
        }
        if (!bookData.description.trim()) {
            return false;
        }
        if (!bookData.category || bookData.category === 'choose a genre') {
            return false;
        }
        if (!bookData.img) {
            return false;
        }
        if (bookData.oldPrice <= 0) {
            return false;
        }
        if (bookData.newPrice <= 0) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            const formData = new FormData();
            formData.append('title', bookData.title);
            formData.append('description', bookData.description);
            formData.append('oldPrice', bookData.oldPrice.toString());
            formData.append('newPrice', bookData.newPrice.toString());
            formData.append('category', bookData.category);
            formData.append('isTrending', bookData.isTrending.toString());
            
            // Add the image file
            if (typeof bookData.img !== 'string') {
                formData.append('image', bookData.img);
            }
            
            // Replace with your actual API endpoint
            
            setTimeout(() => {
                setIsSubmitting(false);
                setTimeout(() => navigate("/dashboard"), 2000);
            }, 1000);
            
        } catch (error) {
            console.error('Error adding book:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className='container max-w-screen-2xl w-full p-6 '>
            <div className='min-w-[500px] md:min-w-[550px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
                <form className='flex flex-col gap-4 items-start w-full' onSubmit={handleSubmit}>
                    <h2 className='text-2xl text-text font-semibold'>Add Book Details Here</h2>
                    
                    <div className="md:col-span-5 flex flex-col items-start w-full">
                        <label className='text-sm font-medium'>Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            value={bookData.title}
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
                            value={bookData.description}
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
                                value={bookData.category || 'choose a genre'}
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
                        <label className='text-sm font-medium'>Upload Image</label>
                        <input 
                            type="file" 
                            id="img" 
                            name="img" 
                            accept="image/*"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                            onChange={handleFileChange} 
                            required
                        />
                        {imagePreview && (
                            <div className="mt-2">
                                <img 
                                    src={imagePreview} 
                                    alt="Book preview" 
                                    className="h-32 object-contain border rounded" 
                                />
                            </div>
                        )}
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
                    
                    <button 
                        type='submit' 
                        className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none disabled:opacity-50' 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Adding...' : 'Add Book'}
                    </button>
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