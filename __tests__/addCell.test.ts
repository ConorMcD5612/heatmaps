import { cellsToAdd } from "@/app/lib/utils";
import { DateTime } from "luxon";
import { describe, expect, test } from "@jest/globals";

test("add one cell", () => {
  const heatmap_id = 1;
  const yesterday = DateTime.now().minus({ days: 1 }).startOf("day");

  const cellData = cellsToAdd(heatmap_id, yesterday);
  const expectedCellData = {
    heatmap_id: heatmap_id,
    time_mins: 0,
    count: 0,
    date: DateTime.now().startOf("day"),
  };

  expect(cellData[0]).toStrictEqual(expectedCellData);
});

test("add two cells", () => {
  const heatmap_id = 1;
  const twoDaysAgo = DateTime.now().minus({ days: 2 }).startOf("day");

  const cellData = cellsToAdd(heatmap_id, twoDaysAgo);
  const expectedCellData = [
    {
      heatmap_id: heatmap_id,
      time_mins: 0,
      count: 0,
      date: twoDaysAgo.plus({ days: 1 }),
    },
    {
      heatmap_id: heatmap_id,
      time_mins: 0,
      count: 0,
      date: twoDaysAgo.plus({ days: 2 }),
    },
  ];

  expect(cellData).toStrictEqual(expectedCellData);
});

test("add no cells (lastUpdated is today", () => {
  const heatmap_id = 1;
  const twoDaysAgo = DateTime.now().startOf("day");

  const cellData = cellsToAdd(heatmap_id, twoDaysAgo);

  expect(cellData).toStrictEqual([]);
});
