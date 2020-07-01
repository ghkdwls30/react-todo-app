import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

class Page1 extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <h2>Hey, I am Page1!</h2>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Page1;