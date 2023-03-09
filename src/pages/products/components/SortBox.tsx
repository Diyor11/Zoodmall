import React, {useState, MouseEvent} from 'react'
import {Button, Menu, MenuItem} from '@mui/material'
import {ArrowDropUp, ImportExport, ArrowDropDown} from '@mui/icons-material';
type SortType = {
    text: string,
    Icon: React.FC, 
    sort: string
}

const sortData: SortType[] = [
    {text: 'Standart', Icon: ImportExport, sort: 'standart'},
    {text: 'Narxlar: quyidan yuqoriga', Icon: ArrowDropUp, sort: 'upToDown'},
    {text: 'Narxlar: yuqoridan quyiga', Icon: ArrowDropDown, sort: 'downToUp'},
]

export default function SortBox() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [sort, setSort] = useState<SortType>(sortData[0])
    const handleClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (data: SortType) => {
        setSort(data)
      setAnchorEl(null);
    };

  return (
    <div>
        <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant='text'
            size='small'
            startIcon={<sort.Icon />}
        >
            {sort.text}
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
        {sortData.map((data, index) => (
            <MenuItem key={index} onClick={() => handleClose(data)}>
                <data.Icon />{data.text}
            </MenuItem>
        ))}
    </Menu>
    </div>
  )
}
