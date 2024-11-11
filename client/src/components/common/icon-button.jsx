import * as React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { mergeClasses } from '../../lib/utils';

const iconButtonVariants = cva(
  'flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700',
  {
    variants: {
      size: {
        sm: '[&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-3 sm:[&_svg]:h-3',
        md: '[&_svg]:w-6 [&_svg]:h-6 sm:[&_svg]:w-5 sm:[&_svg]:h-5',
        lg: '[&_svg]:w-8 [&_svg]:h-8 sm:[&_svg]:w-7 sm:[&_svg]:h-7',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

const IconButton = React.forwardRef(
  (
    {
      className,
      size,
      asChild = false,
      showTooltip = false,
      tooltipText = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={mergeClasses(
          'relative',
          iconButtonVariants({ size }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['md', 'lg', 'sm']),
  asChild: PropTypes.bool,
  showTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  className: '',
  size: 'sm',
  asChild: false,
  showTooltip: false,
  tooltipText: '',
  children: null,
};

export default IconButton;
