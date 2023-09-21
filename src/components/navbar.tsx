export default function Navbar() {
    return (
        <div className="w-11/12 sm:w-6/12">
            <div className="flex justify-between">
                <h1 className="text-2xl font-ibm font-bold">CodeClimbs</h1>
                <div className="flex w-5/12 justify-between text-lg font-ibm">
                    {/* <h4>Posts</h4>
                    <h4>About</h4>
                    <h4>Search</h4>
                    <h4>Tags</h4> */}
                </div>
            </div>
            <hr className="h-px my-8 bg-orange-600 border-0"></hr>
        </div>
    )
}