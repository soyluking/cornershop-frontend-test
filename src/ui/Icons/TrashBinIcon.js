import React from 'react';

const TrashBinIcon = ({ fill = 'var(--dark-black)' }) => {
  return (
    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5547 19.6562L18.2007 5.75195H19.2261C19.749 5.75195 20.1592 5.35205 20.1592 4.8291C20.1592 4.30615 19.749 3.90625 19.2261 3.90625H14.9707V2.65527C14.9707 1.11719 13.9043 0.122559 12.1816 0.122559H8.7876C7.06494 0.122559 5.99854 1.11719 5.99854 2.65527V3.90625H1.76367C1.24072 3.90625 0.830566 4.30615 0.830566 4.8291C0.830566 5.35205 1.24072 5.75195 1.76367 5.75195H2.78906L3.43506 19.6665C3.50684 21.2148 4.48096 22.1069 6.0293 22.1069H14.9604C16.4985 22.1069 17.4829 21.2046 17.5547 19.6562ZM7.94678 2.7373C7.94678 2.21436 8.33643 1.84521 8.91064 1.84521H12.0688C12.6431 1.84521 13.0327 2.21436 13.0327 2.7373L13.043 3.90625H7.93652L7.94678 2.7373ZM6.26514 20.251C5.73193 20.251 5.36279 19.8716 5.33203 19.2974L4.68604 5.75195H16.2729L15.6577 19.2974C15.627 19.8716 15.2681 20.251 14.7246 20.251H6.26514ZM13.3506 18.7026C13.7197 18.7026 14.0068 18.395 14.0171 17.9541L14.3042 8.12061C14.3247 7.7002 14.0273 7.36182 13.6479 7.36182C13.2788 7.36182 12.9814 7.7002 12.9712 8.11035L12.6738 17.9438C12.6636 18.3643 12.9609 18.7026 13.3506 18.7026ZM7.63916 18.7026C8.02881 18.7026 8.32617 18.3643 8.31592 17.9438L8.01855 8.11035C8.0083 7.7002 7.70068 7.36182 7.3418 7.36182C6.95215 7.36182 6.66504 7.68994 6.67529 8.12061L6.97266 17.9541C6.98291 18.395 7.25977 18.7026 7.63916 18.7026ZM10.4897 18.7026C10.8691 18.7026 11.1768 18.3643 11.1768 17.9644V8.11035C11.1768 7.7002 10.8691 7.36182 10.4897 7.36182C10.1206 7.36182 9.81299 7.7002 9.81299 8.11035V17.9644C9.81299 18.3643 10.1206 18.7026 10.4897 18.7026Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrashBinIcon;
