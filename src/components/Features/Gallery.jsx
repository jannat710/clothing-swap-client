import Marquee from "react-fast-marquee";
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2.jpg'
import photo3 from '../../assets/images/photo3.jpg'
import photo4 from '../../assets/images/photo4.jpg'
import photo5 from '../../assets/images/photo5.jpg'
import photo6 from '../../assets/images/photo6.jpg'
import photo7 from '../../assets/images/photo7.jpg'

const Gallery = () => {
    return (
        <div>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">View Gallery</span></h3>
            </div>
            <p className="text-center pb-5">Welcome to our photo gallery! Explore the stunning collection of clothing swap<br /> moments captured in these pictures.</p>
            <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true}>
                <div className="flex gap-6">
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo1} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo1} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo2} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo2} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo3} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo3} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo4} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo4} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo5} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_5" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo5} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo6} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_6').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_6" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo6} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-40 rounded-md" src={photo7} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <button onClick={() => document.getElementById('my_modal_7').showModal()} className="btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white">View</button>
                            <dialog id="my_modal_7" className="modal">
                                <div className="modal-box w-48">
                                    <img className="h-52 w-full rounded-md pb-2" src={photo7} alt="" />
                                    <div className="">
                                        <form method="dialog">
                                            <button className="btn bg-black text-white border-none btn-sm mx flex justify-end items-center mx-auto">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>

                </div>
            </Marquee>

        </div>
    );
};

export default Gallery;