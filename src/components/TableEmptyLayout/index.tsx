import clsx from 'clsx';
import Button from '../Button';

interface TableEmptyLayoutProps {
  size?: string;
  minHeight?: string;
  shouldFit?: boolean;
  containerHeight: string;
  className?: string;

  title?: string;
  subTitle?: string;
  buttonText?: string;
  onControlClick?: () => void;
}

export const TableEmptyLayout = (props: TableEmptyLayoutProps) => {
  const {
    size,
    shouldFit,
    buttonText,
    subTitle,
    title,
    containerHeight,
    onControlClick,
    className
  } = props;

  return (
    <div
      style={{ height: containerHeight, fontSize: size, width: shouldFit ? 'fit-content' : '100%' }}
      className={clsx('w-full relative', className)}
    >
      <div className='w-full h-full absolute flex flex-col items-center justify-center'>
        <div className='text-[16px] font-semi-bold text-[rgba(0, 0, 0, 0.8)] mb-[8px]'>{title}</div>

        <div className='max-w-[315px] text-[14px] leading-normal text-center text-[rgba(0, 0, 0, 0.4)] mb-[10px]'>
          {subTitle}
        </div>

        <Button
          name={buttonText || 'Refresh'}
          onClick={onControlClick}
          className='m-0 w-[200px] h-[40px] rounded-[4px] text-[13px]'
        />
      </div>
    </div>
  );
};
