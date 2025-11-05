# Calendar Test

A small demo project using Vue 3 + TypeScript that includes a calendar component.

## Description

This project contains the `MyCalendar.vue` component which:

- Renders a monthly grid of dates.
- Allows switching months and selecting a day.
- Supports editing the current date via the header (ISO format YYYY-MM-DD).
- Uses `vue-i18n` for localization (for example, the `invalid_date` key is used for error messages).

## Stack

- Vue 3 (Composition API)
- TypeScript
- vue-i18n

## Installation and running

Requirements: Node.js (14+)

1. Install dependencies:
   npm install

2. Run the dev server (if using Vite/CLI):
   npm run dev

3. Build for production:
   npm run build

(Adjust commands to your project's scripts if they differ.)

## Important files

- src/components/MyCalendar.vue — the main calendar component.
- src/utils/getMonthArr.ts — utility to generate the month's day array.
- src/locales/... — localization files for vue-i18n.

## Localization and date format

- The header and weekday names use `vue-i18n`/Intl (`d()`).
- When typing a date, the component expects ISO format (YYYY-MM-DD). An invalid format triggers the `invalid_date` message.

## Tips and improvements

- Add validation and user hints for date input.
- Improve keyboard navigation (arrow keys) and accessibility.
- Add unit and/or e2e tests for the component.

## Contributing and bugs

PRs and issues are welcome — please include clear reproduction steps when reporting bugs.
