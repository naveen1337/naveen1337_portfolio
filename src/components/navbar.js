export default function NavBar(props){
    return (
        <div className="border p-3 flex flex-row justify-between items-center">
            <div>
            <p className="px-3 text-2xl">Naveen</p>
            </div>
            <div className="flex flex-row justfify-between items-center">
            <p className="px-3 text-base">About</p>
            <p className="px-3 text-base">Projects</p>
            <p className="px-3 text-base">Blog</p>
            <p className="px-8 text-base bg-green-500 rounded p-3">Contact</p>
            </div>
        </div>
    )
}