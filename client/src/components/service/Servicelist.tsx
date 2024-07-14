import { Service } from '../../Hooks/useService';

const Servicelist = ({ _id, name, type, address, founded, campus, students, phone,Location, image }: Service) => {
    return (
        <>
            {/* <div className="border my-4 p-4 rounded shadow hover:shadow-lg transition duration-300">
                {_id && <p className="text-sm text-gray-500 mb-2">ID: {_id}</p>}
                <p className="text-xl font-bold text-gray-800 mb-2">{name}</p>
                {type && <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Type:</span> {type}</p>}
                {address && <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Address:</span> {address}</p>}
                {founded && <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Founded:</span> {founded}</p>}
                {campus && <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Campus:</span> {campus}</p>}
                {students && <p className="text-md text-gray-700"><span className="font-semibold">Students:</span> {students}</p>}
                {phone && <p className="text-md text-gray-700"><span className="font-semibold">Phone:</span> {phone}</p>}
            </div> */}

            <div className=' flex-initial flex-wrap mt-10'>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-300  dark:hover:bg-gray-100 h-80 md:h-[15rem] lg:h-[20rem]">
                    <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline ">{name}</h5>
                        {type && <p className="mb-3 font-normal"><span className="font-semibold">Type:</span> {type}</p>}
                        {address && <p className="mb-3 font-normal"><span className="font-semibold">Address:</span> {address}</p>}
                        {Location && <p className="mb-3 font-normal"><span className="font-semibold">Location :</span> {Location}</p>}
                        {founded && <p className="mb-3 font-normal"><span className="font-semibold">Founded:</span> {founded}</p>}
                        {campus && <p className="mb-3 font-normal"><span className="font-semibold">Campus:</span> {campus}</p>}
                        {students && <p className="mb-3 font-normal"><span className="font-semibold">Students:</span> {students}</p>}
                        {phone && <p className="mb-3 font-normal"><span className="font-semibold">Phone:</span> {phone}</p>}
                    </div>
                </a>
            </div>
        </>
    );
};

export default Servicelist;