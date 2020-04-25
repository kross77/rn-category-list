import styled from 'styled-components/native'
import withDevice from './withDevice'
import withMultiSize from './withMultiSize'
import { applyProps, combineProps, separateLiteralToProps } from '../utils/literalUtils'
import React from "react";

export const multiplier = (v: string | number, addPx = true) => {
  v = withMultiSize(v);
  return withDevice(v, addPx)
};

interface Block {
	w: string | number | "auto" | boolean
	h: string | number | "auto" | boolean
	minHeight: string | number
	minWidth: string | number
	flexDirection: "row" | "column" | "row-reverse" | "column-reverse"
	flex: number
	justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
	align: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
	color: string
	flexWrap: "wrap" | "noWrap"
	pv: number | string
	ph: number | string
	pt: number | string
	pr: number | string
	pb: number | string
	pl: number | string
	p: number | string
	padding: number | string
	mv: number | string
	mh: number | string
	mt: number | string
	mr: number | string
	mb: number | string
	ml: number | string
	margin: number | string
	r: number | string
	scale: number
	rotate: number
	zIndex: number
	top: number
	left: number
	right: number
	bottom: number
	relative: boolean
	absolute: boolean
	js: boolean
	jc: boolean
	je: boolean
	jb: boolean
	as: boolean
	ac: boolean
	ae: boolean
	center: boolean
	wh: boolean
	f1: boolean
	f2: boolean
	f3: boolean
	f4: boolean
	row: boolean
	white: boolean
	hidden: boolean
	black: boolean
	red: boolean
	blue: boolean
	green: boolean
	yellow: boolean
	oWhite: boolean
	oBlack: boolean
	oRed: boolean
	oBlue: boolean
	oGreen: boolean
	oYellow: boolean
}

const widthProps = separateLiteralToProps`
	${({w}: Block) => w === true ? 'width: 100%' : w && `width: ${multiplier(w)};`}
	${({h}: Block) => h === true ? 'height: 100%' : `height: ${multiplier(h as string | number)};`}
	${({minHeight}: Block) => minHeight && `min-height: ${multiplier(minHeight)};`}
	${({minWidth}: Block) => minWidth && `min-width: ${multiplier(minWidth)};`}
`;

const flexProps = separateLiteralToProps`
	${({flexDirection}: Block) => flexDirection && `flex-direction: ${flexDirection};`}
	${({flex}: Block) => flex && `flex: ${flex};`}
	${({flexWrap}: Block) => flexWrap && `flex-wrap: ${flexWrap};`}
	${({justify}: Block) => justify && `justify-content: ${justify};`}
	${({align}: Block) => align && `align-items: ${align};`}
	${({color}: Block) => color && `background-color: ${color};`}
`;

const paddingProps = separateLiteralToProps`
	${({pv}: Block) => pv && `padding-vertical: ${multiplier(pv)};`}
	${({ph}: Block) => ph && `padding-horizontal: ${multiplier(ph)};`}
	${({pt}: Block) => pt && `padding-top: ${multiplier(pt)};`}
	${({pr}: Block) => pr && `padding-right: ${multiplier(pr)};`}
	${({pb}: Block) => pb && `padding-bottom: ${multiplier(pb)};`}
	${({pl}: Block) => pl && `padding-left: ${multiplier(pl)};`}
	${({padding}: Block) => padding && `padding: ${multiplier(padding)};`}
	${({p}: Block) => p && `padding: ${multiplier(p)};`}
`;
/* Background: */

const marginProps = separateLiteralToProps`
	${({mv}: Block) => mv && `margin-vertical: ${multiplier(mv)};`}
	${({mh}: Block) => mh && `margin-horizontal: ${multiplier(mh)};`}
	${({mt}: Block) => mt && `margin-top: ${multiplier(mt)};`}
	${({mr}: Block) => mr && `margin-right: ${multiplier(mr)};`}
	${({mb}: Block) => mb && `margin-bottom: ${multiplier(mb)};`}
	${({ml}: Block) => ml && `margin-left: ${multiplier(ml)};`}
	${({margin}: Block) => margin && `margin: ${multiplier(margin)};`}
`;

const borderProps = separateLiteralToProps`
	${({r}: Block) => r && `border-radius: ${r};`}
`;

const transformProps = separateLiteralToProps`
	${({scale}: Block) => scale && `transform: scale(${multiplier(scale)});`}
	${({rotate}: Block) => rotate && `transform: rotate(${multiplier(rotate)}deg);`}
`;
const isExist = (value: any) => value !== undefined && value !== null;

const positionProps = separateLiteralToProps`
	${({zIndex}: Block) => zIndex && `z-index: ${multiplier(zIndex)};`}
	${({top}: Block) => isExist(top) && `top: ${multiplier(top)};`}
	${({left}: Block) => isExist(left) && `left: ${multiplier(left)};`}
	${({right}: Block) => isExist(right) && `right: ${multiplier(right)};`}
	${({bottom}: Block) => isExist(bottom) && `bottom: ${multiplier(bottom)};`}
`;

const superProps = separateLiteralToProps`
	${({relative}: Block) => relative && `position: relative;`}
	${({absolute}: Block) => absolute && `position: absolute;`}
	${({js}: Block) => js && `justify-content: flex-start;`}
	${({jc}: Block) => jc && `justify-content: center;`}
	${({je}: Block) => je && `justify-content: flex-end;`}
	${({jb}: Block) => jb && `justify-content: space-between;`}
	${({as}: Block) => as && `align-items: flex-start;`}
	${({ac}: Block) => ac && `align-items: center;`}
	${({ae}: Block) => ae && `align-items: flex-end;`}
	${({center}: Block) => center && `justify-content: center;align-items: center;`}
	${({wh}: Block) => (wh) && `width: 100%; height: 100%;`}
	${({f1}: Block) => f1 && `flex: 1;`}
	${({f2}: Block) => f2 && `flex: 2;`}
	${({f3}: Block) => f3 && `flex: 3;`}
	${({f4}: Block) => f4 && `flex: 4;`}
	${({row}: Block) => row && `flex-direction: row`}
	${({white}: Block) => white && `background-color: white`}
	${({hidden}: Block) => hidden && `overflow: hidden;`}
	${({black}: Block) => black && `background-color: black`}
	${({red}: Block) => red && `background-color: red`}
	${({blue}: Block) => blue && `background-color: blue`}
	${({green}: Block) => green && `background-color: green`}
	${({yellow}: Block) => yellow && `background-color: yellow`}
	${({oWhite}: Block) => oWhite && `background-color: white; opacity: 0.5`}
	${({oBlack}: Block) => oBlack && `background-color: black; opacity: 0.5`}
	${({oRed}: Block) => oRed && `background-color: red; opacity: 0.5`}
	${({oBlue}: Block) => oBlue && `background-color: blue; opacity: 0.5`}
	${({oGreen}: Block) => oGreen && `background-color: green; opacity: 0.5`}
	${({oYellow}: Block) => oYellow && `background-color: yellow; opacity: 0.5`}
`;

const blockProps = combineProps(
  widthProps,
  flexProps,
  borderProps,
  transformProps,
  paddingProps,
  marginProps,
  positionProps,
  superProps
);

const Block:React.ComponentType<Partial<Block>> = applyProps(styled.View, blockProps);

export default Block
