import avater from '../../assets/images/avater.jpg'

const Support = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold pt-10 text-center">Connect with <span className="text-black">Customers</span></h1>
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
        <button className="btn bg-black text-white border-none btn-md">Send</button>
      </div>
    </div>
  );
};

export default Support;