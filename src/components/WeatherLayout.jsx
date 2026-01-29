function WeatherLayout({ children, backgroundImage }) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="grid grid-cols-5 gap-2 w-full max-w-6xl h-[80vh] overflow-hidden ">
          <div className="col-span-3">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="col-span-2 h-[80-vh]">{children}</div>
        </div>
      </div>
    </>
  );
}
export default WeatherLayout;
