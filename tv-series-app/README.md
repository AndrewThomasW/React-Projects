# SingleSeries

## Project Overview

SingleSeries is a React-based application designed to fetch and display detailed information about a single TV series using the TVmaze API. The project aims to provide users with a comprehensive view of their favorite TV shows, including the show's name, premiere date, network, image, and summary.

## Key Features

- **Data Fetching**: Utilizes the TVmaze API to fetch detailed information about a specific TV show based on the show's ID.
- **State Management**: Manages the fetched data using the component's state to ensure dynamic rendering.
- **Loader Component**: Displays a loader while the data is being fetched, enhancing user experience by indicating ongoing background processes.
- **Detailed Show Information**: Presents the show's name, premiere date, network, image, and summary in a structured format.
- **Dynamic Content Rendering**: Uses `dangerouslySetInnerHTML` to safely render the HTML content of the show's summary.

## Code Explanation

### Component Structure

The `SingleSeries` component is a class-based component that handles the data fetching and rendering logic for displaying a single TV series.

### State Management

- The component's state is initialized with `show` set to `null`.
- Once the data is fetched from the TVmaze API, the state is updated with the fetched show details.

### Data Fetching

- The `componentDidMount` lifecycle method fetches the TV show data based on the `id` parameter from the URL.
- A `fetch` request is made to the TVmaze API, and the response is converted to JSON.
- The component's state is updated with the JSON response, which contains the show's details.

### Rendering Logic

- If the `show` state is `null`, a `Loader` component is displayed.
- Once the `show` state is populated with data, detailed information about the TV show is rendered.
- The rendered information includes the show's name, network, premiere date, image, and summary.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- TVmaze API: Provides data for TV shows, including episodes, cast, and crew information.

### How to Use
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Start the development server using npm start.
5. Navigate to the URL containing the show's ID to view detailed information about the specific TV show.
