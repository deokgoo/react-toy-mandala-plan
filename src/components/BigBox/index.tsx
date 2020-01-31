import React from 'react';
import * as types from './types';
import './style.scss';

import { FillSmallBox, EmptySmallBox } from '../SmallBox/index';
import {color} from "../../redux/boxStore/reducer/type";

class BigBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }
  // first, props => bigBoxNum
  render() {
    return (
      <div className="FillBigBox">
        <FillSmallBox boxColor={color.green} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.red} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.blue} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.lite_blue} textColor={color.white} boxContent={"hoge"}/>
        <EmptySmallBox />
        <FillSmallBox boxColor={color.yellow} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.lite_blue} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.green} textColor={color.white} boxContent={"hoge"}/>
        <FillSmallBox boxColor={color.blue} textColor={color.white} boxContent={"hoge"}/>
      </div>
    );
  }
}

export const FillBigBox = BigBox;

export const EmptyBigBox = () => <div className="EmptyBigBox" />;