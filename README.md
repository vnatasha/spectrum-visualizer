# Spectrum visualizer app

A web application which visualizes spectral data. The spectral data is acquired using nuclear magnetic resonance (NMR) spectroscopy from a blood sample, the provided data are simplified versions of the real-world data

## Server

The backend is an [Apollo GraphQL server](https://www.apollographql.com/docs/apollo-server/v2) that exposes two queries:

- areas: Returns the names and frequiencies ranges for all areas of interest in the spectrum.
- spectrum: Returns the spectrum data points (_{ x, y }_ coordinates) for a specified area.

### Data Sources

The server loads data from an SQLite database, which contains two tables:

- area: Stores information about different areas, including the name and corresponding frequency ranges for each area
- spectrum: Stores simulated spectral data, represented as an array of _{ x, y }_ coordinates.

## Client

The frontend is built with [React](https://react.dev/learn) and uses the [Apollo GraphQL client](https://www.apollographql.com/docs/react/v2) to fetch data from the server. It visualizes the spectral data using the [Highcharts React library](https://github.com/highcharts/highcharts-react) for interactive charts.

## Development

### Prerequisites

Ensure you have the following installed:

- npm >= 10.8.2
- Node.js = v18
- yarn >= 1.22.0
- sqlite3 >= 3.36.0

### Installation

To install dependencies for both the server and the client, run:
```
yarn build
```

### Running the Application

On first run, you need to initialize db with:
```
yarn db-init
```

To start both the server and the client, run:
```
yarn start
```

> **NOTE:** 
> - The web application will be available at: [http://localhost:3000](http://localhost:3000)
> - The Apollo GraphQL server will be running at: [http://localhost:4000](http://localhost:4000)
