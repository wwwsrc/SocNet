import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  };

  render() {
    return (
      <>
        <div>
          <span onDoubleClick={this.activateEditMode}>
            {!this.state.editMode ? this.props.status : null}
          </span>
        </div>
        <div>
          {this.state.editMode ? (
            <input
              autoFocus={true}
              onBlur={this.activateEditMode}
              value={this.props.status}
            ></input>
          ) : null}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
