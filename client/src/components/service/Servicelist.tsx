import { Service } from '../../Hooks/useService';

const Servicelist = ({ _id, name, type, address, founded, campus, students, phone, image, contact, location, description, destinations }: Service) => {
    return (
        <>
            <a href="#" className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl   h-80 md:h-[15rem] lg:h-[20rem]">
                <div className="py-8 w-full hover:bg-gray-100 ">
                    <div className="lg:flex items-center justify-center w-full">
                        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                            <div className="flex items-center border-b border-gray-200 pb-4 ">
                                <img src={image || "https://picsum.photos/id/870/200/300?grayscale&blur=2"} alt={name} className="w-24 h-12  rounded-2xl  " />
                                <div className="flex items-start justify-between w-full ">
                                    <div className="pl-3 w-full">
                                        <p className="text-xl font-medium leading-5 text-gray-800 hover:underline">{name}</p>
                                        <p className="text-sm leading-normal pt-2 text-gray-500">{type}</p>
                                    </div>
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="px-2">
                                {address && <p className="text-sm leading-5 py-4 text-gray-600">{address}</p>}
                                {location && <p className="text-sm leading-5 py-4 text-gray-600">{location}</p>}
                                {description && <p className="text-sm leading-5 py-4 text-gray-600">{description}</p>}
                                {destinations && <p className="text-sm leading-5 py-4 text-gray-600">{destinations}</p>}
                                {campus && <p className="text-sm leading-5 py-4 text-gray-600">{campus}</p>}
                                <div className="flex">
                                    {phone && <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{phone}</div>}
                                    {founded && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{founded}</div>}
                                    {students && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{students}</div>}
                                    {contact && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{contact}</div>}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </a>

            {/* <div className=' flex-initial flex-wrap mt-10'>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-300  dark:hover:bg-gray-100 h-80 md:h-[15rem] lg:h-[20rem]">
                    <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline ">{name}</h5>
                        {type && <p className="mb-3 font-normal"><span className="font-semibold">Type:</span> {type}</p>}
                        {address && <p className="mb-3 font-normal"><span className="font-semibold">Address:</span> {address}</p>}
                        {founded && <p className="mb-3 font-normal"><span className="font-semibold">Founded:</span> {founded}</p>}
                        {campus && <p className="mb-3 font-normal"><span className="font-semibold">Campus:</span> {campus}</p>}
                        {students && <p className="mb-3 font-normal"><span className="font-semibold">Students:</span> {students}</p>}
                        {phone && <p className="mb-3 font-normal"><span className="font-semibold">Phone:</span> {phone}</p>}
                        {contact && <p className="mb-3 font-normal"><span className="font-semibold">Contact:</span> {contact}</p>}
                        {location && <p className="mb-3 font-normal"><span className="font-semibold">Location:</span> {location}</p>}
                    </div>
                </a>
            </div> */}
        </>
    );
};

export default Servicelist;