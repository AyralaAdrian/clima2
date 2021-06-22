import React from 'react'
import Forecast  from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {hour:10, state:"sunny", temperature:17, WeekDay:"Jueves"},
    {hour:11, state:"cloud", temperature:18, WeekDay:"Viernes"},
    {hour:12, state:"fog", temperature:19, WeekDay:"Sabado"},
    {hour:13, state:"cloudy", temperature:14, WeekDay:"Domingo"},
    {hour:14, state:"rain", temperature:13, WeekDay:"Lunes"},
    {hour:15, state:"rain", temperature:11, WeekDay:"Martes"},
]

test('Forecast render', async() => {
    const {findAllByTestId} = render(  <Forecast
             forecastItemList={[forecastItemList]}/>)
    const forecastItems = await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(6)         
})