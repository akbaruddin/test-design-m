function Quote({ text, className }) {
  return (
    <q className={`text-white max-w-[320px] block text-xl text-center mx-auto ${className}`}>{text}</q>
  )
}

export default Quote;