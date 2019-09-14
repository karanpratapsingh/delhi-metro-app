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

import Stations from '../static/metro-stations/stations-generated.json';

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

type MetroLineDataType = {
    id: number,
    name: {
        english: string,
        hindi: string
    },
};

type MetroLineListType = {
    title: string,
    data: MetroLineDataType[],
    colors: string[]
};

type StationListType = {
    id: number,
    name: {
        english: string,
        hindi: string
    },
    lines: string[],
    synonyms: string[]
};

export const MetroLineColorGradients = {
    Aqua: ['#6dd5ed', '#2193b0'],
    Blue: ['#1e88e5', '#5433ff'],
    Magenta: ['#962678', '#ea70cf'],
    Yellow: ['#fbc02d', '#ffa751'],
    Red: ['#e53935', '#FF4B2B'],
    Green: ['#4caf50', '#a8ff78'],
    Violet: ['#654ea3', '#b39ddb'],
    Pink: ['#ea70cf', '#eaafc8'],
    Orange: ['#f4791f', '#f5af19'],
};

export const StationListData: StationListType[] = Stations;

export const MetroLineListData: MetroLineListType[] = [
    {
        title: 'Aqua Line',
        data: AquaLine,
        colors: MetroLineColorGradients.Aqua
    },
    {
        title: 'Blue Line',
        data: BlueLine,
        colors: MetroLineColorGradients.Blue
    },
    {
        title: 'Blue Branch',
        data: BlueBranch,
        colors: MetroLineColorGradients.Blue
    },
    {
        title: 'Magenta Line',
        data: MagentaLine,
        colors: MetroLineColorGradients.Magenta
    },
    {
        title: 'Yellow Line',
        data: YellowLine,
        colors: MetroLineColorGradients.Yellow
    },
    {
        title: 'Red Line',
        data: RedLine,
        colors: MetroLineColorGradients.Red
    },
    {
        title: 'Green Line',
        data: GreenLine,
        colors: MetroLineColorGradients.Green
    },
    {
        title: 'Green Branch',
        data: GreenBranch,
        colors: MetroLineColorGradients.Green
    },
    {
        title: 'Violet Line',
        data: VioletLine,
        colors: MetroLineColorGradients.Violet
    },
    {
        title: 'Pink Line',
        data: PinkLine,
        colors: MetroLineColorGradients.Pink
    },
    {
        title: 'Pink Branch',
        data: PinkBranch,
        colors: MetroLineColorGradients.Pink
    },
    {
        title: 'Orange Line',
        data: OrangeLine,
        colors: MetroLineColorGradients.Orange
    }
];

export const transformPath = path => {

    return path.map(name => {
        let lines = null;
        const path = StationListData.find(station => station.name.english === name);
        if (typeof path !== 'undefined') lines = path.lines;

        return { name, lines };
    });
};



