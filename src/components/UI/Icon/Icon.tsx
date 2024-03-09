import * as React from 'react';

interface IconProps {
    className?: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    children: React.ReactNode
}

function Icon(props: IconProps) {
  const {
    className, width, height, viewBox, children, ...rest
  } = props;
  const viewBoxResult = viewBox || `0 0 ${width} ${height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBoxResult}
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export default Icon;
