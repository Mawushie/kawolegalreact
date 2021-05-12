import React, { Component } from 'react'


export default class StarupsInfo extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div class="startup text-center">
                    <div class="startupscontent">
                        <div className="row">
                            <div className="col-md-2 images">
                                <img src={this.props.img} className="img-responsive"/>
                            </div>

                            <div className="col-md-10 text-left">
                                <h2><a href="#">{this.props.name}</a></h2>
                                <p id = "description">{this.props.description}</p>
                                <button type="button" className="btn btn-default">See full details</button>  
                                <hr></hr>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
