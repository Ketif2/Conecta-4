export const Square = ({children, isSelected}) => {
    const className = `w-16 h-16 border-2 grid place-items-center ${isSelected ? 'bg-slate-400 border-none rounded-md' : ''}`
    return (
    <div className={className}>{children}
    </div>
  )
}
