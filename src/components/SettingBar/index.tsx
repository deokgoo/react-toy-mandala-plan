import React from 'react';
import * as types from './types';
import './style.scss';
import { connect } from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./connectMap";

class SettingBar extends React.Component<types.propsInterface, types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props);
    this.state = {
      box: props.box,
      isSelect: false,
    }
  }

  componentDidUpdate(prevProps:types.propsInterface, nextProptypes: types.propsInterface) {
    if (prevProps.box !== this.props.box) {
      this.setState(() => {
        return { box: this.props.box, isSelect: true }
      });
    }
  }

  setImageView() {
    let { box, isSelect } = this.state;
    if(!isSelect || !box) return;
    let boxStyle = {
      backgroundColor: box.bgColor,
      color: box.textColor
    };
    return (
      <div className="SettingBar__preview" style={boxStyle}>
        <div className="SettingBar__preview__text">{box?.boxContent}</div>
      </div>
    )
  }

  contentChange = (evt: any) => {
    const context = evt.target.value;
    this.setState((state) => {
      let newBox = state.box;
      if(newBox) newBox.boxContent = context;
      return {
        box: newBox,
        isSelect: true
      }
    });
  };

  boxColorChange = (evt: any) => {
    const color = evt.target.value;
    this.setState((state) => {
      let newBox = state.box;
      if(newBox) newBox.bgColor = color;
      return {
        box: newBox,
        isSelect: true
      }
    });
  };

  textColorChange = (evt: any) => {
    const color = evt.target.value;
    this.setState((state) => {
      let newBox = state.box;
      if(newBox) newBox.textColor = color;
      return {
        box: newBox,
        isSelect: true
      }
    });
  };

  updateAll = () => {
    let { box } = this.state;
    let { boxInfo } = this.props;
    if(!boxInfo || !box) return;
    let { boxNum, row, col } = boxInfo;
    let data = [boxNum, row, col];
    this.props.updateBoxColor(box.bgColor, ...data);
    this.props.updateTextColor(box.textColor, ...data);
    this.props.updateText(box.boxContent, ...data);
  };

  setSettingContent = () => {
    let { box, isSelect } = this.state;
    if(!isSelect) return;
    return (
      <div className="content-container">
        <div className="content-context-row">
          <div className="content-context-row__title">Context</div>
          <input className="content-context-row__textInput" value={box?.boxContent} onChange={this.contentChange}/>
        </div>
        <div className="content-container__line" />
        <div className="content-row">
          <div className="content-row__subTitle">BoxColor</div>
          <input className="colorInput" value={box?.bgColor} onChange={this.boxColorChange}/>
        </div>
        <div className="content-container__line" />
        <div className="content-row">
          <div className="content-row__subTitle">TextColor</div>
          <input className="colorInput" value={box?.textColor} onChange={this.textColorChange}/>
        </div>
        <div className="content-container__line" />
        <div className="content-container-buttons">
          <button onClick={()=>{this.updateAll()}}>save</button>
          <button onClick={()=>{}}>reset</button>
        </div>
      </div>
    )
  };

  render() {
    return (
      <div className="SettingBar">
        <div className="SettingBar__title">S e t t i n g</div>
        <div className="line" />
        {this.setImageView()}
        <div className="line" />
        {this.setSettingContent()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingBar);