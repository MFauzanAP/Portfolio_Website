/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                   Accordion Class                                                  */
/* ------------------------------------------------------------------------------------------------------------------ */
class Accordion extends React.Component {

        /* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
                        open                            : false,
			title				: props.options ? (props.options.title || 'Accordion') : 'Accordion',
		}

	}



        /* ==================================================== Functions =================================================== */

	/* Toggle */
	toggle () {

		//	Set open state
                this.setState({open: !this.state.open});

	}



	/* ==================================================== On Render =================================================== */
	render () {

                //      Generate class name
                var class_name = this.state.open ? `active accordion` : `accordion`;

		//	Return html
		return (
                        <div className={class_name}>

                                {/* Title */}
                                <div className="title" onClick={this.toggle.bind(this)}>

                                        {/* Text */}
                                        {this.state.title}

                                        {/* Icon */}
                                        <FontAwesomeIcon className="chevron" icon={['fas', 'chevron-down']}/>

                                </div>

                                {/* Content */}
                                <div className="content">{this.props.children}</div>

                        </div>
                );

	}

}

export default Accordion