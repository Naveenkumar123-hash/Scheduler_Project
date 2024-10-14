
# Daily Event Scheduler


## Production url is `https://merry-taffy-214c46.netlify.app/`

## Task Overview

The Daily Event Scheduler is a simple scheduling application designed to manage events within a 24-hour day. The core functionality is built around a `Scheduler` class, which keeps track of scheduled events and ensures that they do not overlap.

## Key Components

### 1. Scheduler Class

The `Scheduler` class is the backbone of the application. It includes:
- A member variable called `events` to store all scheduled events.
- Two main methods:
  - `addEvent({start_time: number, end_time: number}): boolean`
  - `getEvents(): {start_time: number, end_time: number}[]`

### 2. Event Representation

- Events are represented by their start and end times.
- Whole numbers between `0-23` represent hours in a day (24-hour format).
  - For example, `9` represents `9:00 AM`, and `17` represents `5:00 PM`.

### 3. Adding Events

- The `addEvent` method checks for overlaps before adding a new event.
- If there's no overlap with existing events, the new event is added, and the method returns `true`.
- If there's an overlap, the event is not added, and the method returns `false`.

### 4. Retrieving Events

- The `getEvents` method returns all added events.

### 5. User Interface

- A simple UI allows users to input event start and end times.
- Scheduled events are displayed in a clear, visual manner (e.g., timeline, list, or grid).
- Input validation is implemented to prevent users from submitting invalid or overlapping events.

## Example Scenario

Given the existing events:
- `(2, 5)` and `(7, 9)`

The behavior of the `addEvent` method should be:
- Trying to add `(1, 3)` should fail (overlaps with `2-5`).
- Trying to add `(5, 7)` should succeed (fits between existing events).
- Trying to add `(8, 10)` should fail (overlaps with `7-9`).



