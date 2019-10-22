import React, { Component } from 'react'


const defaultStyle = { width: '100%', 'minWidth': '100%', 'minHeight': '100%', height: '100%' }

class ResponsibleCanvas extends Component {

    componentDidMount() {
        if (this.props.draw) {

            let { clientHeight, clientWidth } = this.refs.container
            const canvas = (this.props.provider).select(this.refs.container).append("svg").attr('width', clientWidth)
                .attr('height', clientHeight)


            this.props.draw(canvas, { height: clientHeight, width: clientWidth })
        }
    }


    render() {
        return <div ref="container" style={defaultStyle}> </div>
    }
}





export default ResponsibleCanvas;