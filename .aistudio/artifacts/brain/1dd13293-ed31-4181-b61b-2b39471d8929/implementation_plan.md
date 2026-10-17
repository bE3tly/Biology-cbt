# Implementation Plan: Fix Leaderboard

## Problem
The leaderboard in `src/components/Leaderboard.tsx` has several issues:
1. It fetches from the wrong Firestore collection (`scores` instead of `test_results`).
2. It incorrectly references `entry.name` instead of `entry.userName`.
3. It does not display the score points or time taken.
4. It lacks tie-breaking logic (sorting by score only, not by time if scores are tied).

## Proposed Changes
1. Update `src/components/Leaderboard.tsx`:
   - Change the collection reference to `test_results`.
   - Update the mapping to use `userName`, `score`, and `timeToFinish`.
   - Implement sorting logic: Sort by `score` descending, and for ties, sort by `timeToFinish` ascending (faster time ranks higher).
   - Update the display to show the score and the time taken for each entry.
2. Verify that the leaderboard correctly displays the data.

## Verification
- Run the app and ensure the leaderboard is populated with the correct data from Firestore after a test submission.
