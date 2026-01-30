import styles from './FilterToggle.module.scss';
import clsx from 'clsx';

interface FilterToggleProps {
  label: string;
  icon?: string;
  checked: boolean;
  onToggle: () => void;
  isRadio?: boolean;
}

export default function FilterToggle({ label, icon, checked, onToggle }: FilterToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={clsx(styles.option, {
        [styles.active]: checked,
      })}
    >
      {icon && (
        <svg className={styles.optionIcon}>
          <use href={`/icons.svg#${icon}`} />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
