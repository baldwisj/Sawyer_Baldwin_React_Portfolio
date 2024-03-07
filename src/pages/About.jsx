import profilePic from "./assets/Sawyer_Garden_of_the_Gods.jpg";

//This is the about page which sources the html for the about page
export default function AboutPage() {
    return (
        <div className="container pt-4">
            <h2 className="contentHeader w-100">About</h2>
            <section className="about row">

                <img src={profilePic} className=" col w-50 d-flex flex-wrap imgshadow " alt="Sawyer leaning against a fence in Garden of the Gods, Colorado" />
                <section className="col">

                    <div>
                        <h3>College years:</h3>
                        <p>After graduating highschool, Sawyer attended Clarkson University for Civil Engineering. However, after two years, he realized Civil
                            Engineering was not what he wanted to do. He decided to move back to his hometown of Keene, NH, and transfer to Keene State Colege
                            for Architecture. After earning an unacredited degree in Architecture from Keene State College, he decided to complete the accredidation
                            through Norwich University's Architecture Program.</p>
                    </div>
                    <div>
                        <h3>After College:</h3>
                        <p>Once completed, he secured a job with a large design-build firm in Hooksett, NH. Unfortunately, in 2020, Covid swept the nation, causing
                            his firm to shut down and layoff most of their employees. For 6 months he looked for work until finding a job in Kitchen and Bath Design.</p>
                    </div>
                    <div>
                        <h3>Today:</h3>
                        <p>Today, Sawyer sometimes manages up to 60 projects at a time while working with customers, vendors, and contractors, to create beautiful
                            kitchens, bathrooms, and other spaces with cabinetry. When he's not working he can be found in his kitchen cooking, out on the road
                            running, or in the mountains hiking with his wife. He an his wife love to go on adventures together and travel. They have traveled out west
                            to Colorado, Utah, Arizon, and Southern California. As Well as places like St. Lucia, Niagra Falls, Boston, and New York City.</p>
                    </div>
                    <div>
                        <h3>Changing Course:</h3>
                        <p>After several years working at his current job, Sawyer found there is little room for growth in his current position. With the feeling
                            that he's worked himself into a corner with his career, He decided to look into other career oprotunities. This has lead him on
                            a new journey with coding and software development.</p>
                    </div>
                </section>
            </section>
        </div>
    )
}
