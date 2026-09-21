import Image from 'next/image';
import bannerImg from "@/assets/hero.png"

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 pt-8 bg-slate-100 rounded-lg shadow-md text-center'>
            <h2 className='font-bold text-4xl'>We Build <br /> <span className='text-pink-800'>Productive</span> Apps</h2>
            <p className='max-w-[800px]'>We build powerful and user-friendly apps designed to make everyday tasks easier and more productive. From smart tools to innovative solutions, our apps are created with modern technology, simple design, and real-world needs in mind—helping you work smarter, save time, and achieve more.</p>

            <div>
                <button className='btn btn-success'>Google Play</button>
                <button className='btn btn-primary'>App Store</button>
            </div>
            <Image src={bannerImg} alt='bannerImg' className=" w-[550px] h-auto" />
        </div>
    );
};

export default Banner;