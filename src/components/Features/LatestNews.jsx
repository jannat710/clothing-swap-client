import { useTypewriter, Cursor } from 'react-simple-typewriter'


const LatestNews = () => {
    const [text] = useTypewriter({
        words: ['Clothing Swap Pop-up Event Coming to Town!','Local Boutique Launches Clothing Swap Service for Sustainable Fashion','New App Connects Fashionistas for Virtual Clothing Swaps','Community Center Organizes Clothing Swap to Promote Recycling'],
        loop: 10,
        typeSpeed:160,
        deleteSpeed:80,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div>
            <h1 className=" text-sm flex justify-start gap-4 items-center border bg-black text-white  my-5 rounded-sm">
                <div className='bg-[#D11752] p-1 rounded-sm'>Latest News :</div>
                <span className="font-medium text-sm"> {text}</span><Cursor/>
            </h1>
            
        </div>
    );
};

export default LatestNews;