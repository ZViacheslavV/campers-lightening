import styles from './Container.module.css';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
};

const Container = ({ children, size = 'lg' }: ContainerProps) => {
  return <div className={clsx(styles.container, styles[size])}>{children}</div>;
};

export default Container;
