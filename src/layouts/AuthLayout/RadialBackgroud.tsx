export const RadialBackground = ({ className }: { className: string }) => {
  return (
    <svg
      width='450'
      height='450'
      viewBox='0 0 450 450'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cy='450' r='449.5' stroke='white' strokeOpacity='0.3' />
      <circle cy='450' r='299.5' stroke='white' strokeOpacity='0.3' />
      <circle cy='450' r='224.5' stroke='white' strokeOpacity='0.3' />
      <circle cy='450' r='149.5' stroke='white' strokeOpacity='0.3' />
      <circle cy='450' r='374.5' stroke='white' strokeOpacity='0.3' />
    </svg>
  );
};
