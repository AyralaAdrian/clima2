import React from 'react'
import Forecast from './Forecast'


export  default {
    title:"Forecast",
    component: Forecast
}

const forecastItemList = [
   {hour:10, state:"sunny", temperature:17, WeekDay:"Jueves"},
   {hour:11, state:"cloud", temperature:18, WeekDay:"Viernes"},
   {hour:12, state:"fog", temperature:19, WeekDay:"Sabado"},
   {hour:13, state:"cloudy", temperature:14, WeekDay:"Domingo"},
   {hour:14, state:"rain", temperature:13, WeekDay:"Lunes"},
   {hour:15, state:"rain", temperature:11, WeekDay:"Martes"},
]

export const ForecastExample = () => ( <Forecast forecastItemList={forecastItemList}/>)
