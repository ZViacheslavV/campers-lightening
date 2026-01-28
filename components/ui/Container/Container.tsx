import styles from './Container.module.scss';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
};

const Container = ({ children, size = 'xxl' }: ContainerProps) => (
  <div className={clsx(styles.container, styles[size])}>{children}</div>
);

export default Container;
