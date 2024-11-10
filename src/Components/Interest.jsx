import './Interest.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
    return (
        <div className='intbox' id='interest'>
            {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
            <h1 className='head'>WHAT I DO?</h1>
            <h2 className='heading'>HERE ARE SOME OF MY EXPERTISE</h2>
            <div className='Interest'>
                {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
                <div className='web'>
                    <h3>APP Develpoment</h3>
                    <p>
                        "I am proficient in App development and skilled in both backend and frontend technologies. If you’re looking to build a high-performance, user-friendly application with a seamless user experience, feel free to reach out. Let’s work together to bring your ideas to life!"
                    </p>
                </div>
                {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
                <div className='app'>
                    <h3>Web Development</h3>
                    <p>
                        "I am proficient in full-stack web development, with strong skills in both backend and frontend technologies. If you're looking to build a responsive, high-performance web application with a focus on user experience and functionality, feel free to reach out. Let’s collaborate to bring your vision to life!"
                    </p>
                </div>
                {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
                <div className='other'>
                    <h3>Expanded Expertise</h3>
                    <p>
                        "With expertise in AI and machine learning, I can integrate intelligent features into your web or mobile applications. Let’s build smart, data-driven solutions that enhance user experience and bring added value to your project."
                    </p>
                </div>
                {/* </ScrollAnimation> */}
            </div>
            {/* </ScrollAnimation> */}
        </div>
    );
}