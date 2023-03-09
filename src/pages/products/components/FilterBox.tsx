import {useState, useMemo, ChangeEvent, useRef, useCallback} from 'react'
import {ElFilterbox, CostRange, CheckboxButton, Accordion} from '../products.style'
import {useSearchParams} from 'react-router-dom'
import {AccordionSummary, Typography, AccordionDetails, Grid, Checkbox, FormControlLabel, Stack, Button} from '@mui/material'
import {filterData, FilterType} from '../../../data/menuData'
import {useAppSelector, useAppDispatch} from '../../../features/hooks'
import {switchFilterOpen} from '../../../features/modalsSlice/modalsSlice'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type RangeType = number[]

export default function FilterBox() {

  const pointInCost = 10000
  const [searchParams, setSearchParams] = useSearchParams()
  const [range, setRange] = useState<RangeType>(() => {
    return searchParams
            .get('price')?.split(',')
            .map((rangeItem: String) => Number(rangeItem) / pointInCost) || [1, 100]
  });
  const [options, setOptions] = useState<FilterType[]>(filterData.map(data => ({...data, value: []})))
  const rangeRef = useRef<RangeType>(range)
  const {open: filterOpen}  = useAppSelector(state => state.modals.filter)

  const dispatch = useAppDispatch()

  const closeFilterbox = useCallback(() => {
    dispatch(switchFilterOpen(false))
  }, [dispatch])


  const cost = useMemo(() => ({min: range[0] * pointInCost, max: range[1] * pointInCost}), [range])

  const getNavigate = useCallback(() => {

    const queryString: {[key: string]: string} = {}

    if(range) {
      setRange(rangeRef.current)
      queryString.price = rangeRef.current.map(num => num * pointInCost).join(',')
    }
    if(options.some(option => option.value.length)) {
      options
        .filter(option => option.value.length)
        .map(option => ({...option, value: option.value.join(',')}))
        .forEach(option => {
          queryString[option.text] = option.value
        })
    }

    closeFilterbox()
    setSearchParams(queryString)
  }, [range, options, setSearchParams, closeFilterbox])


  const handleReange = (
    event: Event | null,
    newValue: number | number[],
    index: number,
  ) => {
    if (Array.isArray(newValue) && newValue.length === 2 && newValue.every(Number))
      rangeRef.current[index] = newValue[index]
  };

  const checkboxChange = (type: string, brand: string) => {

    setOptions(options => options.map(option => {
      if(option.text === type) {
        const isExistd = option.value.findIndex(text => text === brand) >= 0
        isExistd ? option.value = option.value.filter(text => text !== brand) : option.value.push(brand) 
      }
      return option
    }))
    getNavigate()
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) / pointInCost
    const index = e.target.name ===' max'? 1:0
    
    rangeRef.current[index] = value
    rangeRef.current.sort()
  }

  return (
    <ElFilterbox active={filterOpen}>
      <div className='content'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Narxi</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CostRange
            defaultValue={range}
            onChange={handleReange}
            // onChange={(...e) => console.log(e)}
            className='cost-range-input'
            // step={1}
            onMouseUp={getNavigate}
            // disableSwap
          />
          <Grid container>
            <Grid item xs={6} pr={1}>
              <input 
                type="number"
                defaultValue={cost.min}
                // value={cost.min}
                onChange={onInputChange}
                className='mincost_input range-input'
                onBlur={getNavigate}
                name='min'
              />
            </Grid>
            <Grid item xs={6} pl={1}>
              <input 
                type="number"
                defaultValue={cost.max}
                // value={cost.max}
                onChange={onInputChange}
                className='maxcost_input range-input'
                onBlur={getNavigate}
                name='max'
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {filterData.map(({text, value}, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panela-content" + index}
              id={"panela-header" + index}
            >
              <Typography>{text}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction='row' flexWrap={'wrap'}>
                {value.map((brand, i) => (
                  <CheckboxButton key={i}>
                    <FormControlLabel 
                      onChange={(e) => checkboxChange(text, brand)}
                      control={
                        <Checkbox
                          inputProps={{
                            'aria-label': 'Checkbox', 
                            name: brand,
                          }} 
                          size='small' 
                        />
                      } 
                      label={brand}
                    />
                  </CheckboxButton>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button variant='contained'onClick={closeFilterbox} sx={{margin: '1rem', display: {md: 'none', xs: 'block'}}}>Filter</Button>
      </div>
    </ElFilterbox>
  )
}
