const Bannar = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/g9F2CXY/gfhgfjhgf.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">Engagement Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[250px]">
                    <a href="#slide6" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/7n3r59V/bannar-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">Wedding Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/TML6cLc/1643374740-original.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">Anniversaries Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/RhVjxVV/lkkj.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white"> Baby shower Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/YL2zCx1/Mickey-Mouse-Theme.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">Birthday Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/Nx8z2RV/RETIREMENT-PARTY.webp)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">Retirement Events</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle hover:bg-red-100">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-red-100">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;