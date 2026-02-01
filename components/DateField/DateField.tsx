import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import styles from './DateField.module.scss';

interface DateFieldProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

const DATE_FORMAT = 'dd MMMM yyyy';

const DateField = ({ value, onChange }: DateFieldProps) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (date?: Date) => {
    if (!date) return;
    onChange(date);
    setCalendarOpen(false);
  };

  return (
    <div ref={containerRef} className={styles.dateField}>
      <input
        type="text"
        readOnly
        className={styles.input}
        placeholder="Booking date*"
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
              months: styles.months,
              month: styles.month,
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
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateField;
