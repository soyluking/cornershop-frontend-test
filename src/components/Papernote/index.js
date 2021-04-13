const Papernote = ({ children }) => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_d)'>
      <rect x='8' y='6' width='84' height='84' rx='4' fill='white' />
      <rect
        x='8.5'
        y='6.5'
        width='83'
        height='83'
        rx='3.5'
        stroke='black'
        strokeOpacity='0.1'
      />
    </g>
    <foreignObject
      x='26'
      y='6'
      fontSize='9'
      fontWeight='600'
      width='63'
      height='80'
      overflow='scroll'>
      {children}
    </foreignObject>
    <circle cx='16.5' cy='14.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='14.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='24.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='24.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='34.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='34.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='44.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='44.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='54.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='54.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='64.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='64.5' r='3' stroke='black' strokeOpacity='0.1' />
    <circle cx='16.5' cy='74.5' r='2.5' fill='white' />
    <circle cx='16.5' cy='74.5' r='3' stroke='black' strokeOpacity='0.1' />
    <rect opacity='0.2' x='24' y='6' width='1' height='84' fill='#FF3B30' />
    <defs>
      <filter
        id='filter0_d'
        x='0'
        y='0'
        width='100'
        height='100'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='2' />
        <feGaussianBlur stdDeviation='4' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default Papernote;
