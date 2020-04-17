import React from 'react';

import InfoBox from '../components/InfoBox';

export default class InfoBoxBuilder {
	static build(hw, rows = [1, 1, 1, 1, 1], maxColumns = 5) {
		const infoBoxArr = [];

		for (let key of Object.keys(hw)) {
			if (hw[key].information && hw[key].visible) {
				const rowIndex = rows.findIndex(
					row => row + hw[key].size <= maxColumns
				);
				infoBoxArr.push(
					<InfoBox
						key={key}
						title={hw[key].title}
						information={hw[key].information}
						displayIcon={hw[key].displayIcon}
						colorTheme={hw[key].colorTheme}
						gridPositions={{
							gridColumnStart: rows[rowIndex],
							gridColumnEnd: rows[rowIndex] + hw[key].size,
							gridRowStart: rowIndex + 1,
							gridRowEnd: rowIndex + 1,
						}}
					/>
				);
				rows[rowIndex] += hw[key].size;
			}
		}
		infoBoxArr[
			infoBoxArr.length - 1
		].props.gridPositions.gridColumnEnd = maxColumns;
		return infoBoxArr;
	}
}
