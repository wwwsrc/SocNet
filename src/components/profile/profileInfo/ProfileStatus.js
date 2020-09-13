import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    // debugger;
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
    console.log("Pstate", prevState);
    console.log("Pprops", prevProps);
  }
  activateEditMode = (event) => {
    // debugger;
    event.preventDefault();
    console.log("thus", this);
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    console.log(this.state.status);
    return (
      <>
        <div>
          <span onDoubleClick={this.activateEditMode}>
            {!this.state.editMode ? this.state.status : null}
            {this.state.status ? null : "no status"}
          </span>
        </div>
        <div>
          <form onSubmit={this.activateEditMode}>
            {this.state.editMode ? (
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.activateEditMode}
                value={this.state.status}
              ></input>
            ) : null}
          </form>
        </div>
      </>
    );
  }
}

export default ProfileStatus;
