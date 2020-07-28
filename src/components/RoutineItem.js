import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'



export default class RoutineItem extends Component {
    render() {
        const renderTooltip = (props) => (
            <Tooltip className="tooltip" id="button-tooltip" {...props}>
                Click to Remove from your Routine
            </Tooltip>
        );
        
        const activity = this.props.activities.find(activity => activity.id === this.props.userAct.activity_id)

        return (
            <OverlayTrigger placement={this.props.index % 2 === 0 ? "left" : "right"} delay={{ show: 10, hide: 0 }} overlay={renderTooltip}>
                <Col onClick={() => this.props.removeFromRoutine(this.props.userAct)} className="routine-item">
                    {activity.name}
                </Col>
            </OverlayTrigger>
        )
    }
}
