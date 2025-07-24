interface propTypes {
  size: number
};

export const BrainIcon2 = ({  size } : propTypes) => (
  <svg className={`icon`} width={size} height={size}>
    <use xlinkHref={`https://ik.imagekit.io/mrityunjay/brain-illustration-1-svgrepo-com.svg?updatedAt=1752131192463`} />
  </svg>
);

