import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/app/onboarding/birthdate/datepicker.module.css";

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  maxDate?: Date;
}

const CustomDatePicker = forwardRef<DatePicker, CustomDatePickerProps>(
  ({ selected, onChange, maxDate = new Date() }, ref) => {
    return (
      <DatePicker
        ref={ref}
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy.MM.dd"
        locale={ko}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        maxDate={maxDate}
        calendarClassName={styles.reactDatepicker}
        popperClassName={styles.reactDatepicker}
        popperPlacement="bottom"
        inline
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              type="button"
              className="p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-lg font-semibold">
              {date.getFullYear()}년 {date.getMonth() + 1}월
            </div>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              type="button"
              className="p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      />
    );
  }
);

CustomDatePicker.displayName = "CustomDatePicker";

export default CustomDatePicker; 