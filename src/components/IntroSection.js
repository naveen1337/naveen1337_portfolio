

export default function IntroSection(props) {

    return (
        <div className="md:p-8 grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 my-6">
                <h1 className="text-5xl md:text-8xl primary py-4 text-green-500  md:text-left">Jeremy Thomas</h1>
                <h1 className="text-2xl md:text-6xl  primary  text-white  md:my-6">Full Stack Javascript Developer, Node, React and React Native Apps</h1>
                <div className="flex flex-row justify-between">
                    <div className="border boder-green-600 rounded p-3">
                        <p className="uppercase text-white">Projects</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4">
                <img
                    alt="naveen1337 skills"
                    src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="contain rounded"
                     />
            </div>
            <div>
            </div>
        </div>
    )
}