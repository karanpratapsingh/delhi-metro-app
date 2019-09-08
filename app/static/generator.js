// const fs = require('fs');

// const Stations = require('../static/metro-stations/stations.json');

// const AquaLine = require('../static/metro-lines/lines/aqua.json');
// const BlueLine = require('../static/metro-lines/lines/blue.json');
// const BlueBranch = require('../static/metro-lines/branches/blue-branch.json');
// const MagentaLine = require('../static/metro-lines/lines/magenta.json');
// const YellowLine = require('../static/metro-lines/lines/yellow.json');
// const RedLine = require('../static/metro-lines/lines/red.json');
// const GreenLine = require('../static/metro-lines/lines/green.json');
// const GreenBranch = require('../static/metro-lines/branches/green-branch.json');
// const VioletLine = require('../static/metro-lines/lines/violet.json');
// const PinkLine = require('../static/metro-lines/lines/pink.json');
// const PinkBranch = require('../static/metro-lines/branches/pink-branch.json');
// const OrangeLine = require('../static/metro-lines/lines/orange.json');

// /**
//  * Generates station list dynamically
//  */

// const MetroLineListData = [
//     {
//         title: 'Aqua',
//         data: AquaLine
//     },
//     {
//         title: 'Blue',
//         data: BlueLine
//     },
//     {
//         title: 'Blue',
//         data: BlueBranch
//     },
//     {
//         title: 'Magenta',
//         data: MagentaLine
//     },
//     {
//         title: 'Yellow',
//         data: YellowLine
//     },
//     {
//         title: 'Red',
//         data: RedLine
//     },
//     {
//         title: 'Green',
//         data: GreenLine
//     },
//     {
//         title: 'Green',
//         data: GreenBranch
//     },
//     {
//         title: 'Violet',
//         data: VioletLine
//     },
//     {
//         title: 'Pink',
//         data: PinkLine
//     },
//     {
//         title: 'Pink',
//         data: PinkBranch
//     },
//     {
//         title: 'Orange',
//         data: OrangeLine
//     }
// ];

// let OutputData = [];
// let id = 0;

// MetroLineListData.forEach(metroLine => {

//     metroLine.data.forEach(line => {

//         let synonyms = [];

//         const stationMatched = Stations.find(station => station.value.trim() === line.name.english.trim());

//         if (typeof stationMatched === 'undefined') {

//             console.log('Not Found: ' + line.name.english);
//             synonyms.push(line.name.english);
//         } else {
//             console.log('Found: ' + line.name.english);
//             synonyms = stationMatched.synonyms;
//         }

//         OutputData.push({
//             id,
//             name: line.name,
//             line: metroLine.title,
//             synonyms,
//         });

//         id++;
//     });
// });

// OutputData.sort((a, b) => a.name.english.localeCompare(b.name.english));

// fs.writeFile('./metro-stations/stations-generated.json', JSON.stringify(OutputData), error => {
//     console.log(error);
// });

