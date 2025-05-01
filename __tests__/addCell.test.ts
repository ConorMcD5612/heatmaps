
import { cellsToAdd } from "@/app/lib/actions";
import { DateTime } from "luxon";
import {describe, expect, test} from '@jest/globals';


test('add one cell', () => {
    const heatmap_id = 1
    const yesterday = DateTime.now().minus({days: 1}).startOf("day")

    const cellData = cellsToAdd(heatmap_id, yesterday)
    const expectedCellData = {
        heatmap_id: heatmap_id,
        time_mins: 0,
        count: 0,
        date: DateTime.now().startOf("day")
    }

    expect(cellData[0]).toStrictEqual(expectedCellData)
})