import Link from 'next/link';
import clsx from 'clsx';
import styles from './RedButton.module.scss';

type ButtonProps =
  | {
      as?: 'button';
      onClick?: () => void;
      type?: 'button' | 'submit' | 'reset';
      children: React.ReactNode;
      className?: string;
    }
  | {
      as: 'link';
      href: string;
      children: React.ReactNode;
      className?: string;
    };

const RedButton = (props: ButtonProps) => {
  const commonClassName = clsx(styles.button, props.className);

  if (props.as === 'link')
    return (
      <Link href={props.href} className={commonClassName}>
        {props.children}
      </Link>
    );

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={commonClassName}>
      {props.children}
    </button>
  );
};

export default RedButton;
