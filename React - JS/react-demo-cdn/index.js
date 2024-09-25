"use strict";
const e = React.createElement;
class LikeButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = { liked: false };
    }
    render () {
        let text = "Like";
        if (this.state.liked){
            text = "Sudah di like. Batalkan?";
        } else {
            text = "Sudah di like. Batalkan?";
        }
        return e ("button",
            { onClick: () => this.setState({ Liked: !this.state.liked}) },
            text
        );
    }
}
const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton),domContainer);