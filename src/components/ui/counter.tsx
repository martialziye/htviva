import CounterUp from "../elements/CounterUp"


export default function Counter1() {
    return (
        <>

            <div className="counter2-section-area">
                <img src="/assets/images/elementor/elementor10.png" alt="" className="elementor-10" />
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600"><CounterUp count={400} /></h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Consulting Solution</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600"><CounterUp count={620} /></h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Complete Cases</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600"><CounterUp count={800} /></h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Happy Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1400}>
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600"><CounterUp count={120} /></h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Expert Consultant</p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
                <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor-3 aniamtion-key-2" />
            </div >
        </>
    )
}
