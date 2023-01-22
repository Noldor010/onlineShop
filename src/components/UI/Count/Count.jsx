import css from './Count.module.css'

const Count = ({count}) => {
  return (
    <span className={css.span}>{count}</span>
  )
}

export default Count