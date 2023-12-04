import avater from '../../assets/images/avater.jpg'

const Support = () => {
  return (
    <div>
      <div className="font-semibold text-3xl mx-20">
        <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">Connect with Customers</span></h3>
      </div>
      <div className="flex justify-start items-center">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={avater} />
          </div>
        </div>
        <div>
          <p className="font-bold">Customer Support</p>
          <p className="text-gray-600">How can I assist you today?</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <input type="text" placeholder="Type your message..." className="w-full border border-gray-300 p-2 rounded-md" />
        <button className="btn bg-[#D11752] w-1/5 text-white border-none btn-md">Send</button>
      </div>
    </div>
  );
};

export default Support;