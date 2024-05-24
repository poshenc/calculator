const Button = ({
  value
}: {
  value: string;
}) => {
  let btnClass = 'button'
  if (value === '=') btnClass += ' equal'
  if (value === '0') btnClass += ' zero'

  return (
    <div className={btnClass}>{value}</div>
  )
}

export default Button