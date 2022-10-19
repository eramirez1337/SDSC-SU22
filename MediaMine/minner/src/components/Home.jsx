import PopularPicks from "./PopularPicks";

function Home() {
    return (
        <div className="home container home-holder">
            <div className="row">
                <div className="col-10 ">
                    <h1 className="display-4 m-0 heavy-text">Media Mine</h1>
                    <p className="m-0 font-14">Pick a category, take a short or long quiz, and get personalized</p>
                    <p className="font-14">reccommendations. Now, start digging for your next obsession!</p>
                </div>
            </div>
            <PopularPicks />
        </div>
    );
}

export default Home;
