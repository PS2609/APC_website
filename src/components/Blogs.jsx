import React from 'react'
import { useState } from 'react'
import bgimage from '../images/background1.png'
function ReadMore({ id, text, amountOfWords = 100 }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const splittedText = text.split(' ');
    const itCanOverflow = splittedText.length > amountOfWords;
    const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(' ') : text;
    const endText = splittedText.slice(amountOfWords - 1).join(' ');

    return (
        <p id={id}>
            {beginText}
            {itCanOverflow && (
                <>
                    {!isExpanded && <span>...</span>}
                    <span className={`${!isExpanded && 'hidden'}`} aria-hidden={!isExpanded}>
                        {isExpanded && endText}
                    </span>
                    <span
                        className="text-white font-bold font-Montserrat ml-2"
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        aria-controls={id}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? '[Read Less]' : '[Read More]'}
                    </span>
                </>
            )}
        </p>
    );
};
const Blogs = () => {

    const blogs = [
        {
            title: "Tachyons",
            desc: "We all know that the fastest thing in this known observable universe is Light. Light is so fast that it requires only 0.13 sec to complete one round trip of our planet Earth. But did you know about the particles that travel faster than the speed of light?Tachyons are hypothetical subatomic particles that move faster than the speed of light. The term “Tachyons” was coined by physicist Gerald Finberg in 1967. They are distinguished from “bradyons” particles that travel at less than the speed of light. While bradyons are familiar and include protons,electrons and neutrons, tachyons have never been observed.According to special relativity, particles with mass cannot reach or exceed the speed of light in a vaccum because their energy would become infinite. However, tachyons are thought to have imaginary words, meaning the square of their mass is a negative value. This implies that they could potentially travel faster without violating the laws of physics as we currently understand them. Tachyons would slow down if they gained energy, and accelerate if they loss energy.Tachyons are a hypothesis but if such particles did exist they could be used to send signals faster than light."
        },
        {
            title: "Magnetar",
            desc: "Can you imagine a magnet so powerful that it could wipe every credit card on Earth from a distance halfway to the moon? That is how strong the magnetic field of magnetar is! Magnetars are a type of neutron star, an incredibly dense object mainly made up of  tightly packed neutrons, which forms the collapsed core of a massive star during a supernova. Its defining feature is that it has an ultra-powerful magnetic field (~109 to 1011 T, ~1013 to 1015 G). Let us talk about what will happen as we approach the magnetar. If you were to venture closer to a magnetar than about 600 miles (1,000 km), you would die very quickly. Its magnetic field would destroy your body, tearing away electrons from your atoms and converting you into a cloud of monoatomic ions, that is, single atoms without electrons.Astrophysicists do not yet know how a magnetar generates its stupendous magnetic field. However , it probably relates to the incredible density of neutron stars and their bizarre interiors. The magnetic field of a magnetar may be caused by a neutron star’s interior - thought to be made up of neutrons,quarks and exotic states of matter such as Bose-Einstein Condensates - becoming a superconducting fluid. Thus , when the star rotates, it would behave like a huge dynamo, generating an immense magnetic field."
        },
        {
            title: "JUPITER’S MOST INTERESTING MOONS!",
            desc: "Jupiter, the solar system's giant, isn't just massive, it also reigns supreme in the moon department with a staggering 79 moons! Four of these moons, nicknamed the ''Galilean moons'' after their discoverer Galileo Galilei in 1610, are particularly interesting. Io, the most volcanic world known, erupts sulfurous lava across its surface. Europa, cloaked in a icy shell, is suspected to hold a vast saltwater ocean beneath, making it a hot spot in the search for life beyond Earth. Ganymede, the undisputed king of moons, is even larger than the planet Mercury and boasts a thin oxygen atmosphere and a magnetic field. Callisto, the second largest Jovian moon, is another contender for a hidden ocean and holds the record for the most craters in our solar system! With such diverse and intriguing features, these Galilean moons continue to spark our imaginations and fuel our quest to unravel the mysteries of our cosmic neighborhood."
        },
        {
            title: "9 UNUSUAL THINGS RESEARCHERS LAUNCHED INTO SPACE FOR SCIENCE",
            desc: "In our relentless quest to understand the cosmos, humanity has launched a surprisingly eclectic mix of items into space.  This celestial menagerie goes far beyond the expected telescopes and probes.  Slime mold, with its surprising adaptability, has journeyed alongside the humble fruit fly to explore the effects of space radiation on living organisms.  Even jellyfish, those mesmerizing creatures of the deep, haven't been spared a trip to space, offering insights into how microgravity affects their development.  The list goes on:  bacteria like salmonella, the near-indestructible tardigrades, curious spiders, and even mouse sperm have all taken a cosmic voyage.  These experiments aren't just about satisfying our curiosity; they have real scientific applications.  By studying how slime behaves in zero gravity, researchers gain knowledge about fluid dynamics.  Tissue chips, tiny replicas of human organs, help us understand organ function in space, vital for future long-term missions.  Experiments with bacteria like salmonella shed light on how space travel might affect the virulence of pathogens.  The brave tardigrades, known for their resilience, are helping us understand the effects of radiation on living things.  Spiders, with their intricate web-building abilities, are providing insights into how organisms orient themselves in microgravity.  Mouse sperm journeys aim to assess reproductive viability in space, crucial for future space colonization efforts.  Medaka fish and even bullfrogs have contributed to research on bone density and motion sickness in microgravity, respectively.  These seemingly bizarre payloads are pushing the boundaries of space medicine and contributing significantly to our ability to explore the cosmos for extended periods.  The next time you gaze upon the night sky, remember that it's not just a canvas of stars, but a vast laboratory filled with these unusual experiments, a testament to humanity's ingenuity and unwavering desire to unlock the secrets of the universe."
        },
        {
            title: "FOUR THINGS YOU (PROBABLY) DIDN’T KNOW ABOUT SPACE!",
            desc: "Astronaut Chris Hadfield's revelation that space might smell like brimstone due to spacecraft outgassing adds another layer of intrigue to the already fascinating topic of space exploration. It's a reminder that while space itself might be a vacuum, our interactions with it introduce new sensory experiences. Meanwhile, moon dust, brought back by Apollo missions, is said to have a distinct odor like gunpowder. This unique aroma is likely caused by the chemical composition of the lunar surface, bombarded by solar radiation for billions of years.Here on Earth, our 'pale blue dot,'' teeming with life, boasts an estimated 3 trillion trees, a number that dwarfs the sheer number of stars in our Milky Way galaxy. This statistic highlights the sheer abundance of life on our planet, a precious oasis in the vast cosmic desert.The common misconception that space is silent is dispelled by the ingenuity of NASA. By converting cosmic data into sound, they've given us a way to 'hear' the universe, from the hum of the cosmic microwave background radiation to the energetic bursts of solar flares.Finally, the darkness of space, despite being filled with countless stars, is explained by Olbers' paradox. The vastness of the universe and the finite age of light create a limit to how much light can reach us. Stars that existed billions of years ago are still shedding light that hasn't reached us yet, contributing to the overall darkness.These are just a few surprising facts that challenge our preconceived notions about space. As we continue to explore the cosmos, we can expect to uncover even more unexpected wonders that will redefine our understanding of the universe."
        },
        {
            title: "Death of the Universe",
            desc: "Whenever we think about the beginning or the birth of the universe the only theory that pops out of our mind is the big bang theory. The Big bang is the beginning of our universe and the beginning of time. Well, most physicists did not believe in the idea of the big bang they believed in some other theories but the big bang is widely expected.The Big Bang as the name suggests it proposed the idea that the universe is created with a big explosion and starts expanding and it is expanding till now. The Big bang is a point where time, t is equal to ‘0 seconds’. But it proposed the idea of birth of the universe, what about death ?There are three theories having “big” in their name proposing the idea of death of the universe. These theories are The Big Freeze, The Big Crunch and The Big RIP.Let us briefly talk about all these theories:The Big Freeze :- The Heat Death of the universe (also known as the Big Chill or Big Freeze) is a hypothesis on the ultimate fate of the universe, which suggests the universe would evolve to a state of no thermodynamic free energy and would therefore be unable to sustain processes that increase entropy. Heat death does not imply any particular absolute temperature; it only requires that temperature differences or other processes may no longer be exploited to perform work. In the language of physics, This is when the universe reaches thermodynamic equilibrium.The Big Crunch:- This theory suggests that the expansion of the universe eventually reverses and the universe starts collapsing. Ultimately causing the cosmic scale factor to reach zero. An event potentially followed by reformation of the universe starting with another Big Bang.The Big RIP:- In Physical cosmology, the Big RIP is a hypothetical model concerning the ultimate fate of the universe, in which the matter of the universe, from stars and galaxies to atoms and subatomic particles, and even spacetime itself, is progressively torn apart by the expansion of the universe at a certain time in the future. "
        },
        {
            title: "Einstein-Rosen Bridge",
            desc: "Einstein-Rosen Bridge or Wormholes is a hypothetical structure based on a special solution of the Einstein field equations. A wormhole is a tunnel that has two ends at different places in spacetime.Wormholes are consistent with Einstein’s general theory of relativity, but whether they exist is unknown. Wormholes, according to many physicists, are just projections of a fourth spatial dimension. In 1995, Matt Visser suggested there may be many wormholes in the universe if cosmic strings with negative mass were generated in the early universe. Not to be confused with the string in string theory.Wormholes are very unstable. It has been proven theoretically that quantum field theory enables situations where energy can be indefinitely negative at a given place, and that the energy density in particular regions of space can be negative compared to ordinary matter vacuum energy.Many physicists, including Stephen Hawking and others, have argued that such an effect could allow a traversable wormhole to be stabilized. It has also been suggested that a tiny black hole maintained open by a negative mass cosmic string could have been inflated to macroscopic size by cosmic inflation if it had appeared around the time of the big bang."
        },
        {
            title: "The God Particle",
            desc: "Higgs Boson ( also known as the god particle or Higgs particle), particle that is the carrier particle, or boson, of the Higgs field, a field that permeates space and endows all elementary subatomic particles with mass through its interaction with them. The field and the particle are named after Peter Higgs. He proposed the mechanism provided a testable hypothesis for the origin of mass in elementary particles.The Higgs field is different from other fundamental fields – such as the electromagnetic field that underlie basic forces between particles. First, it is a scalar field. This implies that its carrier, the Higgs Boson , has an intrinsic angular momentum, or spin, of 0, unlike the carrier of the force fields, which have spin. Second , the Higgs field has the unusual property that its energy is higher when the field is zero than when it is nonzero. The elementary particles therefore acquired their masses through interactions with a nonzero Higgs field only when the universe cooled and became less energetic in the aftermath of the big bang. The variety of masses characterizing the elementary subatomic particles arise because different particles have different strengths of interaction with the Higgs field.Higgs BOSON PRODUCTION:- One of the four most important ways in which Higgs boson are produced and then decay at the large hadron collider. Two colliding protons each emit a W boson. The two W boson then collide to produce the Higgs boson , which in turns decay into two Z bosons, each of which then decays into an electron plus positron or muon plus antimuon."
        }
    ];
    const [seeMore, setseeMore] = useState(false)

    const handleSeeMore = () => {
        setseeMore(!seeMore)
    }

    return (
        <div>
            <div className=" bg-cover text-white font-Montserrat  h-screen w-full" style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2  text-white font-bold text-center">
                    <h3 className='text-7xl md:3xl lg:7xl'>Blogs!</h3>
                    <div className='bg-gradient-to-r from-[#7D80BF] to-[#81A456] w-[70%] sm:w-[50%] md:w-[30%] mx-auto my-5  h-1 '>
                    </div>
                    <p className='italic text-xl text- rem font-medium '>The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.</p>
                </div>
            </div>
            <div className="content text-white  font-Montserrat bg-gradient-to-b px-5 from-[#000000] to-[#3D2F2F]    ">
                <div className="Tachyons  flex items-center py-5  flex-col md:flex-row gap-5 ">
                    <div className="img  md:w-[30%]  flex md:justify-start justify-around "><img src="src/images/Blogs_image/Tachyons.png" /></div>
                    <div class="text md:w-[70%] ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[0].title}</div>
                        <ReadMore id={blogs[0].title} text={blogs[0].desc} />
                    </div>
                </div>
                <div className='bg-white mx-auto h-1'></div>
                <div className="Magnetar  flex items-center py-5 flex-col-reverse md:flex-row gap-5 ">
                    <div class="text md:w-[70%] ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[1].title}</div>
                        <ReadMore id={blogs[1].title} text={blogs[1].desc} />
                    </div>
                    <div className="img  md:w-[30%]  flex md:justify-start justify-around ">
                            <img className='relative w-1/2 h-1/2  object-cover ' src="src/images/Blogs_image/Magnetar2.png" />
                            <img className="relative top-1/2  -translate-x-1/4 translate-y-5  w-1/2 object-cover " src="src/images/Blogs_image/Magnetar3.png" />
                        </div>
                </div>
                <div className='bg-white mx-auto h-1'></div>
                <div className="  flex items-center py-5  flex-col md:flex-row gap-5 ">
                    <div className="img  md:w-[30%]  flex md:md:justify-start justify-aroundjustify-around  ">
                        <img className='relative w-3/4 h-3/4 sm:w-1/2 sm:h-1/2  md:w-3/4 md:h-3/4  object-cover' src="src/images/Blogs_image/Frame 91.png" />
                        <img className="relative top-1/2  -translate-x-1/2 -translate-y-1 w-1/2 h-1/2 sm:w-[35%] sm:h-[35%] md:w-1/2 md:h-1/2 object-cover " src="src/images/Blogs_image/Frame 92.png" />
                    </div>

                    <div class="text md:w-[70%] ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[2].title}</div>
                        <ReadMore id={blogs[2].title} text={blogs[2].desc} />
                    </div>
                </div>
                <div className='bg-white mx-auto h-1'></div>
                <div className=" flex items-center py-5 flex-col-reverse md:flex-row gap-5 ">
                    <div class="text md:w-[70%] ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[3].title}</div>
                        <ReadMore id={blogs[3].title} text={blogs[3].desc} />
                    </div>
                    <div className="relative img  md:w-[30%]  flex md:justify-start justify-around  ">
                        <img className='relative w-3/4 h-3/4  object-cover ' src="src/images/Blogs_image/Frame 99.png" />
                        <img className="relative top-1/2  -translate-x-1/2 -translate-y-1 w-1/2 h-1/2 object-cover " src="src/images/Blogs_image/Frame 100.png" />
                    </div>
                </div>
                <div className='bg-white mx-auto h-1'></div>
                <div className="  flex items-center py-5  flex-col md:flex-row gap-5 ">
                    <div className="img  md:w-[30%]  flex md:justify-start justify-around ">
                        <img className='relative w-3/4 h-3/4  object-cover ' src="src/images/Blogs_image/Frame 93.png" />
                        <img className="relative top-1/2  -translate-x-1/2 -translate-y-1 w-1/2 h-1/2 object-cover " src="src/images/Blogs_image/Frame 94.png" />
                    </div>
                    <div class="text md:w-[70%] ">
                        <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[4].title}</div>
                        <ReadMore id={blogs[4].title} text={blogs[4].desc} />
                    </div>
                </div>
                {seeMore && <>
                    <div className='bg-white mx-auto h-1'></div>
                    <div className="Death flex items-center py-5 flex-col-reverse md:flex-row gap-5 ">
                        <div class="text md:w-[70%] ">
                            <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[5].title}</div>
                            <ReadMore id={blogs[5].title} text={blogs[5].desc} />
                        </div>
                        <div className="relative img  md:w-[30%]  flex justify-center  ">
                            <img className=' w-[250px] h-[250px] rounded-full' src="src/images/Blogs_image/Death.png"  />
                        </div>
                    </div>
                    <div className='bg-white mx-auto h-1'></div>
                    <div className="ERB  flex items-center py-5  flex-col md:flex-row gap-5 ">
                        <div className="img  md:w-[30%]  flex md:justify-start justify-around ">
                            <img className='relative w-3/4 h-3/4  object-cover ' src="src/images/Blogs_image/ERB.png" />
                            <img className="relative top-1/2  -translate-x-1/2 translate-y-5  w-[52%] object-cover " src="src/images/Blogs_image/ERB2.png" />
                        </div>
                        <div class="text md:w-[70%] ">
                            <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[6].title}</div>
                            <ReadMore id={blogs[6].title} text={blogs[6].desc} />
                        </div>
                    </div>
                    <div className='bg-white mx-auto h-1'></div>
                    <div className="God_Particle flex items-center py-5 flex-col-reverse md:flex-row gap-5 ">
                        <div class="text md:w-[70%] ">
                            <div className="title text-[30px] md:text-[36px] my-3 md:text-start text-center">{blogs[7].title}</div>
                            <ReadMore id={blogs[7].title} text={blogs[7].desc} />
                        </div>
                        <div className="img  md:w-[30%]  flex md:justify-start justify-around ">
                            <img className='relative w-3/4 h-3/4  object-cover ' src="src/images/Blogs_image/God1.png" />
                            <img className="relative top-1/2  -translate-x-1/2 translate-y-5  w-[52%] object-cover " src="src/images/Blogs_image/God2.png" />
                        </div>
                    </div>
                </>}
                <div className='mt-8   flex flex-row justify-center'>
                    <button onClick={handleSeeMore} className='flex mb-8 flex-row justify-center gap-3 w-[156px] rounded-lg text-white text-lg font-bold text-nowrap p-[16px] bg-[#520000] tracking-wider'>
                        <span className='my-auto'>{seeMore ? "See Less" : "See More"}</span>
                        {!seeMore ? <img className='my-auto' src="src/images/down_arrow.png" alt="" /> : null}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blogs