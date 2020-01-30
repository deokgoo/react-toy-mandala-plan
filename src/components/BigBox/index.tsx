import React from 'react';
import * as types from './types';
import './style.scss';

import SmallBox from '../SmallBox/index';
import {color} from "../../redux/boxStore/reducer/type";

class BigBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className="BigBox">
        <SmallBox boxColor={color.green} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.red} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.blue} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.lite_blue} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.gray} textColor={color.white} boxContent={"sibal"}/>
        <SmallBox boxColor={color.yellow} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.lite_blue} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.green} textColor={color.white} boxContent={"hoge"}/>
        <SmallBox boxColor={color.blue} textColor={color.white} boxContent={"hoge"}/>
      </div>
    );
  }
}

export default BigBox;