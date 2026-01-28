import styles from './Container.module.css';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
};

const Container = ({ children, size = 'xxl' }: ContainerProps) => {
  return <div className={clsx(styles.container, styles[size])}>{children}</div>;
};

export default Container;
