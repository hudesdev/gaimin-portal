function CalendarDays(props) {
  const startMonths = props.start.getMonth();
  const startDate = props.start.getDate();
  const endMonths = props.end.getMonth();
  const endDate = props.end.getDate();
  const current = props.day.getMonth();
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 35; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
    }

    currentDays.push(calendarDay);
  }
  return (
    <div className="table-content">
      {
        currentDays.map((day, index) => {
          return (
            <div className= {`calendar-day ${day.selected ? " selected" : ""} ${day.currentMonth ? `border-[1px]`:``} ${day.number>=3&&day.number<10? `border-[#D8277C]/[0.3]`:day.number>=10&&day.number<16 ?`border-[#FEDA03]/[0.3]` :day.number>=16&&day.number<24?`border-[#03FE3A]/[0.3]`:day.number>=24&&day.number<31?`border-[#55EDED]/[0.3]`: `border-[#9432E7]/[0.3]`} group cursor-pointer relative`}
                  onClick={() => props.changeCurrentDay(day)} key={index} >  
              {startMonths === current && startDate === day.number? <p className="absolute top-0 right-[-2px] text-white bg-fontpink text-[9px] rounded-[12px] px-1">start</p>:''}
              {endMonths === current && endDate === day.number? <p className="absolute top-0 right-[-2px] text-white bg-fontpink text-[9px] rounded-[12px] px-1">end</p>:''}
              <p className={`text-xs ${day.currentMonth ? day.number < 3 ? "text-[#9432E7]" :day.number>=3&&day.number<10?` text-[#D8277C]`: day.number>=10&&day.number<16 ? ` text-[#FEDA03]`:day.number>=16&&day.number<24?` text-[#03FE3A]`: day.number>=24&&day.number<31?"text-[#55EDED]": "text-[#9432E7]" :`text-[#999]`} ${day.selected ? " selected" : ""} group-hover:text-white`}>{day.number}</p>
            </div>
          )
        })
      }
    </div>
  )
}
export default CalendarDays;
