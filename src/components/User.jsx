function User({ image, name, title }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex justify-center">
        <img src={image} loading="lazy" className="border-4 border-white rounded-full overflow-hidden w-56 h-56" />
      </div>
      <div className="mt-6">
        <h5 className="text-white font-semibold mb-1">{name}</h5>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  )
}

export default User;