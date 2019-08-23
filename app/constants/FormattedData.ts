/**
    -> Blue
    -> Blue Branch
    -> Magenta
    -> Yellow
    -> Red
    -> Green
    -> Green Branch
    -> Violet
    -> Pink
    -> Pink Branch
    -> Orange (Airport Express Line)
 */


import AquaLine from '../static/metro-lines/lines/aqua.json';
import BlueLine from '../static/metro-lines/lines/blue.json';
import BlueBranch from '../static/metro-lines/branches/blue-branch.json';
import MagentaLine from '../static/metro-lines/lines/magenta.json';
import YellowLine from '../static/metro-lines/lines/yellow.json';
import RedLine from '../static/metro-lines/lines/red.json';
import GreenLine from '../static/metro-lines/lines/green.json';
import GreenBranch from '../static/metro-lines/branches/green-branch.json'
import VioletLine from '../static/metro-lines/lines/violet.json';
import PinkLine from '../static/metro-lines/lines/pink.json';
import PinkBranch from '../static/metro-lines/branches/pink-branch.json';
import OrangeLine from '../static/metro-lines/lines/orange.json';

type MetroLineListType = {
    title: string,
    data: any,
    colors: string[]
};

export const MetroLineListData: MetroLineListType[] = [
    {
        title: 'Aqua Line',
        data: AquaLine,
        colors: ['#6dd5ed', '#2193b0']
    },
    {
        title: 'Blue Line',
        data: BlueLine,
        colors: ['#5433ff', '#20bdff']
    },
    {
        title: 'Blue Branch',
        data: BlueBranch,
        colors: ['#5433ff', '#20bdff']
    },
    {
        title: 'Magenta Line',
        data: MagentaLine,
        colors: ['#962678', '#ea70cf']
    },
    {
        title: 'Yellow Line',
        data: YellowLine,
        colors: ['#ffe259', '#ffa751']
    },
    {
        title: 'Red Line',
        data: RedLine,
        colors: ['#FF416C', '#FF4B2B']
    },
    {
        title: 'Green Line',
        data: GreenLine,
        colors: ['#a8ff78', '#78ffd6']
    },
    {
        title: 'Green Branch',
        data: GreenBranch,
        colors: ['#a8ff78', '#78ffd6']
    },
    {
        title: 'Violet Line',
        data: VioletLine,
        colors: ['#654ea3', '#eaafc8']
    },
    {
        title: 'Pink Line',
        data: PinkLine,
        colors: ['#ea70cf', '#eaafc8'],
    },
    {
        title: 'Pink Branch',
        data: PinkBranch,
        colors: ['#ea70cf', '#eaafc8'],
    },
    {
        title: 'Orange Line',
        data: OrangeLine,
        colors: ['#f4791f', '#f5af19'],
    }
];