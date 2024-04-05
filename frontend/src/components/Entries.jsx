export default function Entries() {
  return (
    <>
      <div className="post px-2 md:container  ">
        <div className="mt-4 bg-secondary grid grid-cols-2 gap-2">
          <div>
            <img
              className="flex justify-items-center object-center"
              src="https://techcrunch.com/wp-content/uploads/2024/03/Reactor-and-Gas-Injection-System.jpg?w=1390&crop=1"
              alt="/"
            />
          </div>
          <div className="">
            <h2 className=" font-mono font-bold">
              Terraform Industries converts electricity and air into synthetic
              natural gas for the first time
            </h2>
            <div className="text-gray-400">
              <div className="text-black font-semibold">Sudhanshu singh</div>
              <span>3:30PM</span>
              <span>April 2,2024</span>
            </div>
            <p className="hidden sm:block">
            The modern world is dependent on a vast network for extracting,
            processing, transporting and ultimately consuming hydrocarbons like
            crude oil and natural gas. But these resources come with a cost:
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
