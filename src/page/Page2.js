import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

class Page2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div>
                    <h2>Hey, I am Page2!</h2>
                </div>
                <Footer></Footer>
            </React.Fragment>

        );
    }
}

export default Page2;