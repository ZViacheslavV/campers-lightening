import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import styles from './DateField.module.scss';
import clsx from 'clsx';

interface DateFieldProps {
  value: Date | null;
  onChange: (date: Date) => void;
  hasError?: boolean;
  touched?: boolean;
  name: string;
}

const DATE_FORMAT = 'dd MMMM yyyy';

const DateField = ({ name, value, onChange, hasError, touched }: DateFieldProps) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (date?: Date) => {
    if (!date) return;
    onChange(date);
    setCalendarOpen(false);
  };

  const placeholder = hasError && touched ? 'Select a date between today' : 'Booking date*';

  return (
    <div ref={containerRef} className={styles.dateField}>
      <input
        type="text"
        readOnly
        className={clsx(styles.input, value ? styles.activeInput : '')}
        placeholder={placeholder}
        value={value ? format(value, DATE_FORMAT) : ''}
        onClick={() => setCalendarOpen((prev) => !prev)}
      />

      {isCalendarOpen && (
        <div className={styles.popover}>
          <DayPicker
            mode="single"
            selected={value ?? undefined}
            onSelect={handleSelect}
            disabled={{ before: new Date() }}
            showOutsideDays
            fixedWeeks
            classNames={{
              root: styles.calendarRoot,
              caption: styles.caption,
              caption_label: styles.captionLabel,
              nav: styles.nav,
              nav_button: styles.navButton,
              table: styles.table,
              head_row: styles.headRow,
              head_cell: styles.headCell,
              row: styles.row,
              cell: styles.cell,
              day: styles.day,
              day_selected: styles.daySelected,
              day_today: styles.dayToday,
              day_outside: styles.dayOutside,
              day_disabled: styles.dayDisabled,
              weeks: styles.weeks,
              week: styles.week,
              week_number: styles.weekNumber,
              week_number_header: styles.weekNumberHeader,
              weekday: styles.weekday,
              weekdays: styles.weekdays,
              month_grid: styles.monthGrid,
              month_caption: styles.monthCaption,
              months: styles.months,
              month: styles.month,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateField;
