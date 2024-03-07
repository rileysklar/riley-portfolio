---
title: 💭 Message Board App
publishDate: 2024-02-07 00:00:00
img: /assets/didyouknow.png
img_alt: A message board that has functionality to dynamically call a database. Users can contribute facts, upvote and downvote facts based on their perceived truthfulness, cite their source, and sort by taxonomies.
description: |
  A dynamic message board leveraging React for UI components and Supabase for real-time database interactions. Users can contribute facts, upvote and downvote, cite sources, and filter content by categories.
tags:
  - React Router
  - Javascript
  - Supabase
---

<a href="https://shakewell-didyouknow.netlify.app/">Visit the live web app</a>

> Empowering Knowledge Sharing: Our Journey with a React App and Supabase

#### Introduction

In the digital age, rapid information dissemination and interactive user engagement are key. Our React Dynamic Message Board Web App exemplifies this by combining React's component-based UI with Supabase's real-time database functionalities.

#### Technical Implementation Details

##### React Components and State Management

- **Functional Components**: Utilizes React's functional components with hooks for concise and readable code. Each part of the app, such as message display, fact submission form, and voting buttons, is encapsulated in its component.
- **State Management**: Employs useState and useContext hooks for local and global state management, respectively. This allows for efficient updates and sharing of state across components without prop drilling.
- **Effect Hook**: useEffect is used for side effects, such as fetching data from Supabase on component mount and subscribing to real-time updates.

##### Supabase Integration

- **Real-time Database**: Integrates with Supabase for storing and retrieving facts, votes, and user contributions. Utilizes Supabase's real-time subscriptions to instantly reflect changes in the UI when data is added or updated.
- **Authentication**: Implements Supabase's authentication for secure user login and registration, enabling users to contribute facts and vote securely.
- **Querying and Sorting**: Leverages Supabase's powerful querying capabilities to filter and sort facts by categories, popularity (votes), and timestamps.

##### Real-time Functionality

- **Subscriptions**: Uses Supabase subscriptions to listen for changes in the database, ensuring that the app's content is always up-to-date without manual refresh.
- **Optimistic UI Updates**: Applies optimistic UI updates for a responsive user experience. When a user votes or adds a fact, the UI updates immediately before the database transaction completes.

##### Routing and Navigation

- **React Router**: Implements React Router for declarative routing, enabling users to navigate between different views (e.g., categories, top facts) without full page reloads.

##### Enhanced User Experience

- **Responsive Design**: Adopts a mobile-first design approach, ensuring the app is fully responsive and accessible on various devices.
- **Interactive Elements**: Incorporates interactive UI elements like modals for fact submission, tooltips for vote counts, and dropdowns for sorting options.

#### Conclusion

This React Dynamic Message Board Web App is a testament to the power of combining React's efficient UI components with Supabase's real-time data capabilities. This technical journey has not only allowed us to create a platform for knowledge sharing but also to deepen our understanding of modern web development practices.
