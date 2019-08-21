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

import { SectionItem } from 'react-native-super-grid';

type MetroSectionListType = {
    title: string,
    data: [any]
};

export const MetroLineSectionListData: SectionItem<MetroSectionListType>[] = [
    {
        title: 'Aqua Line',
        data: AquaLine,
    },
    {
        title: 'Blue Line',
        data: BlueLine,
    },
    {
        title: 'Blue Branch',
        data: BlueBranch,
    },
    {
        title: 'Magenta Line',
        data: MagentaLine,
    },
    {
        title: 'Yellow Line',
        data: YellowLine,
    },
    {
        title: 'Red Line',
        data: RedLine,
    },
    {
        title: 'Green Line',
        data: GreenLine,
    },
    {
        title: 'Green Branch',
        data: GreenBranch,
    },
    {
        title: 'Violet Line',
        data: VioletLine,
    },
    {
        title: 'Pink Line',
        data: PinkLine,
    },
    {
        title: 'Pink Branch',
        data: PinkBranch,
    },
    {
        title: 'Orange Line',
        data: OrangeLine,
    }
];