import React from 'react';
import CalendarDays from './calendar-days.js';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// import '../styles/calendar.css'

const Calendar = (props) => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = React.useState(new Date());
    const today = React.useRef(new Date());
    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
    }

    const nextDay = () => {
        setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() + 1)));
    }

    const previousDay = () => {
        setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() - 1)));
    }

    const setNow = () => {
        setCurrentDay(new Date);
    }
    return (
      <div className="calendar flex flex-col gap-2">
        <div className='w-full flex justify-between items-center pb-3'>
            <p className='text-white text-xl font-bold'>Calendar</p>
            <div className='flex items-center gap-4 text-white'>
                <FaAngleLeft className='cursor-pointer hover:opacity-60'onClick={() => previousDay()} /> {months[currentDay.getMonth()].substring(0, 3)} <FaAngleRight className='cursor-pointer hover:opacity-60' onClick={() => nextDay()}/>
            </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday) => {
                return <div className="weekday" key={weekday}><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} start={props.start} end={props.end} />
        </div>
        <p className='text-white text-xs font-bold text-center cursor-pointer' onClick={() => setNow()} >Today, {months[today.current.getMonth()]} {today.current.getDate()}, {today.current.getFullYear()}</p>

      </div>
    )
}

export default Calendar