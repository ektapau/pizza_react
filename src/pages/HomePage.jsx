import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center"> Our Story </h1>
                    <p>
                        We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
                        with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
                        that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
                    </p>
                    <p>
                        Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
                        Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
                    </p>
                    <p>
                        We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
                        excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
                        Pan Pizza is the Tastiest Pan Pizza. Ever!
                    </p>
                    <div className="row">
                        <div className="col-md-3 justify-content-center align-self-center">
                            <img src="./images/undraw_cooking_lyxy.svg" width="100%" height="200px" alt="" />
                        </div>
                        <div className="col-md-8 offset-md-1 justify-content-center align-self-center">
                            <h3>Ingredients</h3>
                            <p>
                                We're ruthless about goodness. We have no qualms about tearing up a day-old
                                lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop.
                                Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It
                                makes the kitchen a better place.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 offset-md-1 justify-content-center align-self-center">
                            <h3>Our Chefs</h3>
                            <p>
                                They make sauces sing and salads dance. They create magic with skill,
                                knowledge, passion, and stirring spoons (among other things). They
                                make goodness so good, it doesn't know what to do with itself. We do
                                though. We send it to you.
                            </p>
                        </div>
                        <div className="col-md-3 justify-content-center align-self-center">
                            <img src="./images/undraw_Chef.svg" width="100%" height="200px" alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 justify-content-center align-self-center">
                            <img src="./images/undraw_time_management_30iu.svg" width="100%" height="200px" alt=""  />
                        </div>
                        <div className="col-md-8 offset-md-1 justify-content-center align-self-center">
                            <h3>45 min delivery</h3>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
