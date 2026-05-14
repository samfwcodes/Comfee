const Heading = (props) => {
  return (
    <div className = 'flex'>
        <h1 className="h-style">{props.text.toUpperCase()}</h1>
    </div>
  )
}

export default Heading