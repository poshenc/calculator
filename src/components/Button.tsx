const Button = ({
  value,
  onClick
}: {
  value: string;
  onClick: (key: string) => void;
}) => {
  let btnClass = 'button'
  if (value === '=') btnClass += ' equal'
  if (value === '0') btnClass += ' zero'

  return (
    <button className={btnClass} onClick={() => onClick(value)}>{value}</button>
  )
}

export default Button