import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingTop: '6px',
          paddingBottom: '6px',
          color: '#FFFBF9',
          fontFamily: 'Founders Grotesk',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
          fontFeatureSettings: "'liga' off, 'clig' off",
          flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          height: '32px',
          width: 'fit-content',
          transition: 'all 0.2s ease-in-out',
          backgroundColor: 'transparent'
        }}
        {...props}
      >
        {icon && (
          <span style={{
            width: '16px',
            height: '16px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </span>
        )}
        <span style={{ transform: 'translateY(-1px)' }}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };