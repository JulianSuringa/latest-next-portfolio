interface LogoProps {
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'minimal' | 'gradient' | 'yellow' | 'orange'
  className?: string
}

export function Logo({
  initials = 'JD',
  size = 'md',
  variant = 'default',
  className = '',
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-24 h-24 text-3xl',
  }

  const variantClasses = {
    default: 'bg-primary text-primary-foreground border-2 border-primary',
    minimal: 'bg-transparent text-foreground border-2 border-current',
    gradient:
      'bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground border-2 border-primary/20',
    yellow: 'bg-yellow-400 text-black border-2 border-yellow-500',
    orange: 'bg-orange-400 text-black border-2 border-orange-600',
  }

  return (
    <div
      className={`
      ${sizeClasses[size]} 
      ${variantClasses[variant]}
      rounded-full
      flex items-center justify-center
      font-medium
      transition-all duration-300
      hover:scale-105
      hover:shadow-lg
      relative
      overflow-hidden
      ${className}
    `}
    >
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-4 h-4 bg-current rounded-full transform translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-current rounded-full transform -translate-x-1 translate-y-1"></div>
      </div>

      {/* Initials */}
      <span className="relative z-10 font-medium tracking-tight">{initials}</span>
    </div>
  )
}
