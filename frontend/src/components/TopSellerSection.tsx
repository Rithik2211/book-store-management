import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'

const TopSellerSection = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const dropdown = [
    {
      value: 'fiction',
      label: 'Fiction',
    },
    {
      value: 'romance',
      label: 'Romance',
    },
    {
      value: 'mystery',
      label: 'Mystery',
    },
    {
      value: 'horror',
      label: 'Horror',
    },
  ]

  return (
    <div className='flex flex-col justify-between items-center max-w-7xl w-full  gap-5 lg:gap-[180px]'>
      <FormControl className='w-[150px] border-none'>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
          {
            dropdown?.map((item, index) => (
              <MenuItem  key={index} value={item.value}>{item.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <div className=''>

      </div>
    </div>
  )
}

export default TopSellerSection;