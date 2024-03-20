# Node.js CRUD API with Express and MongoDB

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB. It allows you to perform basic CRUD operations on a MongoDB database.

## Requirements

To run this API, you need to have the following installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo-name
    ```

3. Install the dependencies using npm:

    ```bash
    npm install
    ```

4. Start the MongoDB server. You can do this by running the `mongod` command in your terminal.

5. Start the Node.js server:

    ```bash
    npm start
    ```

6. The API server should now be running on `http://localhost:3000`.

## API Endpoints

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update an product by ID
- **DELETE /api/products/:id**: Delete an product by ID

## Sample Usage

### Get all Products

```http
    GET /api/products
```

### Create a new Product

```http
    POST /api/products
    Content-Type: application/json

    {
        "name": "Product Name",
        "description": "Item Description",
        "price": 9.99
    }
```

### Update an Product

```http
    PUT /api/products/:id
    Content-Type: application/json

    {
        "name": "Updated Product Name",
        "description": "Updated Item Description",
        "price": 19.99
    }
```

### Delete an Product

```http
    DELETE /api/products/:id
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.


### License

This project is licensed under the MIT License - see the LICENSE file for details.

```css

    Feel free to customize this `README.md` file to better suit your project structure, features, and requirements. You can add more details about the project, installation 
    steps, usage examples, or any other relevant information.
```

