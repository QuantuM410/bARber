# Barber 💇‍♂️💈

Welcome to the Barber App repository! This project is developed using Next.js 13, Prisma ORM, DeepAR and a MySQL database hosted on PlanetScale. It's designed to manage and facilitate operations for a barber shop, allowing you to handle appointments, customers, and last but not the least, tryon different hairstyles using AR!

## Features 🌟

- **DeepAR**: This project uses DeepAR's models, custom made by us, to give users a live example of how a certain hairstyle would look on them using their webcam.

- **Next.js 13**: The project is built using the latest version of Next.js, a popular React framework that provides server-side rendering and easy routing.

- **Prisma ORM**: Prisma is used as the Object-Relational Mapping (ORM) tool to interact with the MySQL database. It helps simplify database queries and management.

- **MySQL Database on PlanetScale**: The database used by the Barber App is hosted on PlanetScale, providing scalability and reliability.

## Getting Started 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/QuantuM410/bARber.git

   ```

2. Install dependencies:

   ```bash
   cd barber-app
   npm install

   ```

3. Obtain a MySQL database URL from a hosting service of your choice. You can use platforms like Heroku, AWS, or others to set up a MySQL database.

4. Update the .env file with your MySQL database URL:

   ```bash
   DATABASE_URL="mysql://username:password@host:port/database_name"

   ```

5. Run the application on your local machine:

   ```bash
   npm run dev

   ```

6. Open your browser and navigate to http://localhost:3000 to see the Barber App in action!

Now you're all set to explore and experiment with the Barber App. Have fun managing appointments, customers, and trying out different hairstyles using AR! 💇‍♂️💇‍♀️