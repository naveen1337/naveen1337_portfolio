export default function NavBar(props){
    return (
        <div className="p-3 flex flex-row justify-between items-center">
            <div>
            <p className="px-3 text-2xl text-gray-100">Thomas</p>
            </div>
            <div className="flex flex-row justfify-between items-center">
            <p className="px-3 text-base text-gray-300">About</p>
            <p className="px-3 text-base text-gray-300">Projects</p>
            <p className="px-3 text-base text-gray-300">Blog</p>
            {/* <p className="hidden px-8 text-base bg-green-500 rounded p-3 md:block text-gray-200">Contact</p> */}
            </div>
        </div>
    )
}