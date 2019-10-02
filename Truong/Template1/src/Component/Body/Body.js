import React, {Component} from 'react';
import './Body.scss';
class Body extends Component {
    render() {
        return (
            <div id="body">
                <div id="marginbody">
                    <div id="bodyfirst">
                        <div id="bodyleft">
                            <h1>Eu justo augue esta</h1>
                            <p>Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices
                                quis
                                curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia
                                pellentum
                                leo.</p>
                        </div>
                        <div id="bodyright">
                            <h1>630 x 300 px</h1>
                        </div>
                        <div className="clearboth"></div>
                    </div>

                    <div id="bodysecond">
                        <div id="bodysecond-left">
                            <h3>Lorum ipsum dolor</h3>
                            <p>This is a W3C standards compliant free HTML5 ibsite template from OS Template. This template is
                                distributed using a website template licence.</p>
                            <p>You can use and modify the template for both personal and commercial use. You must keep all
                                copyright information and credit links in the template and associated files. For more HTML5
                                templates visit free website templates.</p>
                        </div>
                        <div id="bodysecond-right">
                            <div id="listimage">
                                <div id="imageleft" class="imagediv">
                                    <h1>Image 1</h1>
                                </div>
                                <div id="imageright">
                                    <div id="imagerightleft" class="imagediv">
                                        <h1>Image 2</h1>
                                    </div>
                                    <div id="imagerightright" class="imagediv" >
                                        <h1>Image 3</h1>
                                    </div>
                                    <div className="clearboth"></div>
                                </div>
                                <div className="clearboth"></div>
                            </div>
                            <div>
                                <a className="linkcolor" href="#root" >VIEW OUR IMAGE GALLERY HERE »</a>
                            </div>
                        </div>
                        <div className="clearboth"></div>
                        <div id="spacebody"></div>
                        <hr id="fullhr"/>
                        <div id="bodythrid">
                            <div id="leftbodythird">
                                <div id="fromtheblog">
                                    <h2><i>FROM THE BLOG</i></h2>
                                    <h4>
                                        Post Title
                                    </h4>
                                    <p>Admin, domainname.com</p>
                                    <p>Friday, 6th April 2000</p>
                                    <p>Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
                                        imperdiet.</p>
                                </div>
                                <div id="quicklink" >
                                    <h2>QUICK LINK</h2>
                                    <a href="#root">Lorem ipsum dolor sit</a>
                                    <hr/>
                                    <a href="#root">Amet consectetur</a>
                                    <hr/>
                                    <a href="#root">Praesent vel sem id</a>
                                    <hr/>
                                    <a href="#root">Curabitur hendrerit est</a>
                                    <hr/>
                                    <a href="#root">Sed a nulla urna</a>
                                    <hr/>
                                </div>
                            </div>
                            <div id="aboutus">
                                <h2>About US</h2>
                                <div id="aboutusleft">
                                    <div class="imagediv"></div>
                                </div>
                                <div id="aboutusright">
                                    <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a
                                        cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
                                        feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                                        Suspendisse in justo eu magna luctus suscipit.</p>
                                </div>
                                <div className="clearboth"></div>
                                <div id="aboutusendmore">
                                    <a href="#root" className="linkcolor">Read more</a>
                                </div>
                            </div>
                            <div className="clearboth"></div>
                        </div>
                    </div>
                </div>
                <div className="clearboth"></div>
                <div className="spacebody"></div>
            </div>
        )
    }
};
export default Body;