import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
}

export const ColorTile: React.FC<Props> = ({ className = '' }) => (
  <div className={twMerge('rounded-md h-40 w-40', className)}></div>
)
