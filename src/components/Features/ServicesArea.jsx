

const ServicesArea = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold pt-10 text-center"><span className="text-[#8e4afc]">Services </span>Area Map</h1>
            <p className="py-5">We provide clothing swap services in the following areas:</p>
            <div>
                <iframe className="w-full mx-auto h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.893794573521!2d90.38577217979162!3d23.75116642367159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1699352660872!5m2!1sen!2sbd" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ServicesArea;