export default function FloatingBlobs({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo/20 blur-[100px] animate-float-slow" />
      <div className="absolute top-1/3 right-0 w-[24rem] h-[24rem] rounded-full bg-violet/20 blur-[110px] animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] rounded-full bg-cyan/20 blur-[100px] animate-float-slow" />
    </div>
  )
}
